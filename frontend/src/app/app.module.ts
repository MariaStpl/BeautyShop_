import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import {NgxUiLoaderModule, NgxUiLoaderConfig, SPINNER, PB_DIRECTION} from "ngx-ui-loader";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptorInterceptor } from './services/token-interceptor.interceptor';
import { ProductItemComponent } from './product-item/product-item.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderComponent } from './order/order.component';
import { TrackingComponent } from './tracking/tracking.component';
import { CmsComponent } from './cms/cms.component';
import { SignupCmsComponent } from './signup-cms/signup-cms.component';
import { FogotPasswordCmsComponent } from './fogot-password-cms/fogot-password-cms.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ChartsModule } from 'ng2-charts';


const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    text:"Loading...",
    textColor: "#FFFFFF",
    textPosition:"center-center",
    pbColor:"red",
    bgsColor:"red",
    fgsColor:"red",
    fgsType: SPINNER.ballSpinFadeRotating,
    fgsSize:100,
    pbDirection:PB_DIRECTION.leftToRight,
    pbThickness:5
}

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignupComponent,
    ForgotPasswordComponent,
    LoginComponent,
    ProductItemComponent,
    CartComponent,
    CheckoutComponent,
    OrderComponent,
    TrackingComponent,
    CmsComponent,
    SignupCmsComponent,
    FogotPasswordCmsComponent,
    ProfilComponent,
    HeaderHomeComponent,
    ResetPasswordComponent,
    EditProfilComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    ChartsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
