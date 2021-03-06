import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';

import { MenuComponent } from './menu/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';

import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { SortUsersPipe } from './pipes/sort-users.pipe';
import { SortVendorsPipe } from './pipes/sort-vendors.pipe';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { SortRequestsPipe } from './pipes/sort-requests.pipe';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

import { PurchaseRequestListComponent } from './purchase-request/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestDetailComponent } from './purchase-request/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './purchase-request/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestEditComponent } from './purchase-request/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestReviewListComponent } from './purchase-request/purchase-request-review-list/purchase-request-review-list.component';
import { PurchaseRequestReviewDetailComponent } from './purchase-request/purchase-request-review-detail/purchase-request-review-detail.component';
import { PurchaseRequestLinesComponent } from './purchase-request/purchase-request-lines/purchase-request-lines.component';



import { LineItemEditComponent } from './line-item/line-item-edit/line-item-edit.component';
import { LineItemCreateComponent } from './line-item/line-item-create/line-item-create.component';
import { LineItemDetailComponent } from './line-item/line-item-detail/line-item-detail.component';

import { UserLoginComponent } from './user/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    BoolDisplayPipe,
    SortUsersPipe,
    SortRequestsPipe,   
    SortProductsPipe,
    SortVendorsPipe,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    PurchaseRequestListComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestLinesComponent,
    PurchaseRequestReviewDetailComponent,
    LineItemDetailComponent,
    LineItemCreateComponent,        
    LineItemEditComponent,        
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,   
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }