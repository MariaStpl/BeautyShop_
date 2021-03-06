import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
    url = environment.apiUrl;

    constructor(private httpClient: HttpClient)  { }

  get(id:any) {
    return this.httpClient.get(this.url +
        "/profil/get/" + id)
}

}
