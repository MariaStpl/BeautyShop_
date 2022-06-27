import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class OrdersService {
    url = environment.apiUrl;

    constructor(private httpClient: HttpClient) { }


    getOrders() {
        return this.httpClient.get(this.url +
            "/orders/get/")
    }

    deleteCheckout(idCheck: any) {
        return this.httpClient.delete(this.url +
            "/orders/deleteCheckout/" + idCheck)
    }

    delete(checkoutId: any) {
        return this.httpClient.delete(this.url +
            "/orders/delete/" + checkoutId)
    }
    update(data: any) {
        return this.httpClient.patch(this.url +
            "/orders/update", data)
    }

}
