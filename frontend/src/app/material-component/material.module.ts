import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { CategoryComponent } from './dialog/category/category.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ProductComponent } from './dialog/product/product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageDetailProductComponent } from './manage-detail-product/manage-detail-product.component';
import { DetailProductComponent } from './dialog/detail-product/detail-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderEditComponent } from './dialog/order-edit/order-edit.component';
import { NotificationComponent } from './notification/notification.component';
import { ViewBillOrdersComponent } from './dialog/view-bill-orders/view-bill-orders.component';
import { AddAddressComponent } from './dialog/add-address/add-address.component';
import { ViewAddressComponent } from './dialog/view-address/view-address.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ConfirmationComponent,
    ChangePasswordComponent,
    ManageCategoryComponent,
    CategoryComponent,
    ManageProductComponent,
    ProductComponent,
    ManageOrderComponent,
    ViewBillComponent,
    ManageUserComponent,
    ManageDetailProductComponent,
    DetailProductComponent,
    OrdersComponent,
    OrderEditComponent,
    NotificationComponent,
    ViewBillOrdersComponent,
    AddAddressComponent,
    ViewAddressComponent    
  ]
})
export class MaterialComponentsModule {}
