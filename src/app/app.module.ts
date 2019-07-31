import { TransfereService } from './service/transfere.service';
import { CenterProductService } from './pages/centerProduct/center-product.service';
import { AgmCoreModule } from '@agm/core';
import { SelectModule } from 'ng-select';
import { CenterService } from './pages/centers/center.service';
import { UserService } from './pages/users/user.service';
import { DatepickerModule } from 'angular2-material-datepicker';
import { DateFilterComponent } from './shared/date-filter/date-filter.component';
import { StatusFilterComponent } from './shared/status-filter/status-filter.component';
import { OrderService } from './pages/order/order.service';
import { SizeService } from './pages/products/size.service';
import { ProductService } from './pages/products/product.service';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AbstractProductService } from './pages/abstract-products/abstract-product.service';
import { UploadImgService } from './shared/upload-img/upload-img.service';
import { UploadImgComponent } from './shared/upload-img/upload-img.component';
import { TableComponent } from './shared/table/table.component';
import { LoginService } from './pages/login/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { GlobalService } from './service/global.service';
import { MainService } from './service/main.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AppDirectionService } from './service/app-direction.service';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { loginComponent } from './pages/login/login.component';
import { LoaderService } from './service/loader.service';
import { ApiService } from './service/api.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { DialogService } from './service/dialog.service';
import { ConfirmComponent } from './modal/confirm/confirm.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SuccessComponent } from './modal/success/success.component';
import { FailedComponent } from './modal/failed/failed.component';
import { AddAbtractProductsComponent } from './pages/abstract-products/add-abtract-products/add-abtract-products.component';
import { GradeService } from './pages/abstract-products/grade.service';
import { ListAbstractProductComponent } from './pages/abstract-products/list-abstract-product/list-abstract-product.component';
// import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ShowAbstractProductComponent } from './pages/abstract-products/show-abstract-product/show-abstract-product.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListOrderComponent } from './pages/order/list-order/list-order.component';
import { OrderInfoComponent } from './modal/order-info/order-info.component';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { ChangeOrderStatusComponent } from './modal/change-order-status/change-order-status.component';
import { CommonModule } from '@angular/common';
import { ListCenterComponent } from './pages/centers/list-center/list-center.component';
import { AddCenterComponent } from './pages/centers/add-center/add-center.component';
import { StatesService } from './pages/centers/state.service';
import { GroupService } from './pages/users/group.service';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { ShowCenterComponent } from './pages/centers/show-center/show-center.component';
import { AddCenterProductComponent } from './pages/centerProduct/add-center-product/add-center-product.component';
import { ListStafUserComponent } from './pages/users/list-staf-user/list-staf-user.component';

export function HttpLoaderFactory(http: Http) {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');

}

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,

    // pages
    // // home
    HomeComponent,

    // // abstract
    AddAbtractProductsComponent, ListAbstractProductComponent, ShowAbstractProductComponent,

    // // product
    AddProductComponent,

    // // order
    ListOrderComponent,

    // // user
    ListUserComponent,

    // // auth
    loginComponent,

    // // others
    TableComponent, UploadImgComponent, StatusFilterComponent, DateFilterComponent,


    // // dialog
    ConfirmComponent, SuccessComponent, FailedComponent, OrderInfoComponent, ChangeOrderStatusComponent, ListCenterComponent, AddCenterComponent, AddUserComponent, ShowCenterComponent, AddCenterProductComponent, ListStafUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { enableTracing: false, useHash: true }),
    ClickOutsideModule,
    AngularFontAwesomeModule,
    SharedModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SelectModule,
    NgbModule.forRoot(),
    PaginationModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyArvKKYtpC6C6khvDPT_HAWG5hXMiKwakk'
    }),
    // Ng2ImgMaxModule,
    DatepickerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  providers: [
    HttpClient,
    // main services
    AppDirectionService, AuthGuardService, MainService, GlobalService, AuthService, LoaderService, ApiService, DialogService,TransfereService,
    // pages services
    CenterService, LoginService, StatesService, UploadImgService, GradeService, AbstractProductService, ProductService, SizeService, OrderService, UserService, GroupService, CenterProductService,
    // others
    NgbActiveModal
  ],
  entryComponents: [
    ConfirmComponent,
    FailedComponent,
    SuccessComponent,
    OrderInfoComponent,
    ChangeOrderStatusComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }