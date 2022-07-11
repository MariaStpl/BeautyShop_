import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { ManageDetailProductComponent } from './manage-detail-product/manage-detail-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewBillComponent } from './view-bill/view-bill.component';



export const MaterialRoutes: Routes = [
    {
        path:'category',
        component:ManageCategoryComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },

    {
        path:'product',
        component:ManageProductComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },

    {
        path:'detail',
        component:ManageDetailProductComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'order',
        component:ManageOrderComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'orders',
        component:OrdersComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'bill',
        component:ViewBillComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },
    {
        path:'user',
        component:ManageUserComponent,
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    }
];
