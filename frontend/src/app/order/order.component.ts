import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { environment } from 'src/environments/environment';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { GlobalConstants } from '../shared/global-constants';
import { SnackbarService } from '../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginComponent } from '../login/login.component';
import { CartService } from '../services/cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
    public orderList: any = [];
    public orderitems: any = [];
    responseMessage: any;
    public items: any = [];
    itemArray: any = [];
    public totalItem: number = 0;
    data: any;
    manageOrderForm: any = FormGroup;

    constructor(private orderService: OrderService,
        private ngxService: NgxUiLoaderService,
        private snackbarService: SnackbarService,
        private route: ActivatedRoute,
        private dialog: MatDialog,
        private router: Router,
        private cartService: CartService,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            console.log(params) //log the entire params object
            console.log(params['id'])
            this.cartItem(params.id)
        }) 
        this.cartService.getCart().subscribe((response: any) => {
            this.totalItem = response.length;
        })
        this.manageOrderForm = this.formBuilder.group({
            receipt: [null, [Validators.required]]
        })
    }

    tracking(){
        var formData = this.manageOrderForm.value;
        var data = {
            receipt: formData.receipt,
        }
        this.router.navigate(['/tracking/get/'+ data.receipt])
    }

    cartItem(id: any) {
        this.orderService.get(id).subscribe((response: any) => {
            this.orderList = response.map((data: any) => {
                data.items.map((data: any) => {
                    if (data.itemImage) {
                        data.itemImage = environment.apiUrl + '/images/upload_detail/' + data.itemImage;
                        return data;
                    }
                    return data
                })
                return data
            })
            this.responseMessage = response.message;
            this.ngxService.stop();
        }, (error: any) => {
            this.ngxService.stop();
            console.log(error);
            if (error.error?.message) {
                this.responseMessage = error.error?.message;
            }
            else {
                this.responseMessage = GlobalConstants.genericError;
            }
            this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
        })
        console.log(this.orderList);


    }

    signupAction() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = "550px";
        this.dialog.open(SignupComponent, dialogConfig);
    }
    forgotPasswordAction() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = "550px";
        this.dialog.open(ForgotPasswordComponent, dialogConfig);
    }
    loginAction() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = "550px";
        this.dialog.open(LoginComponent, dialogConfig);
    }

    cartAction() {
        this.router.navigate(['/cart'])
    }

}
