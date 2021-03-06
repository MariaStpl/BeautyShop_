import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';
import  jwt_decode from "jwt-decode";
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(public auth:AuthService,
    public router:Router,
    private snackbarService:SnackbarService) { }

    canActivate(route:ActivatedRouteSnapshot):boolean{
        let expectedRoleArray = route.data;
        expectedRoleArray = expectedRoleArray.expectedRole;

        const token:any = localStorage.getItem('token');
        var tokenPayload:any;

        try{
            tokenPayload = jwt_decode(token);
        }
        catch(err){
            localStorage.clear();
            this.snackbarService.openSnackBar(GlobalConstants.mustlogin, GlobalConstants.error);
            // this.router.navigate(['/']);
        }

        let checkRole = false;

        for(let i=0; i < expectedRoleArray.length; i++){
            if(expectedRoleArray[i] == tokenPayload.role){
                checkRole = true;
            }
        }

        if(tokenPayload.role == 'admin'){
            if(this.auth.isAuthenticated() && checkRole){
                return true;
            }
            this.snackbarService.openSnackBar(GlobalConstants.unauthroized, GlobalConstants.error);
            this.router.navigate(['/beautyshop/dashboard']);
            return false;
        }
        else{
            if(tokenPayload.role == 'user'){
                if(this.auth.isAuthenticated() && checkRole){
                    return true;
                }
                this.router.navigate(['/']);
                return false;
            }
            else{
                this.router.navigate(['/']);
                localStorage.clear();
                return false;
            }
        }
    }
}
