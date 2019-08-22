import { AbstractProductOrderComponent } from './pages/abstract-products/abstract-product-order/abstract-product-order.component';
import { ListStafUserComponent } from './pages/users/list-staf-user/list-staf-user.component';
import { AddCenterProductComponent } from './pages/centerProduct/add-center-product/add-center-product.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { AddCenterComponent } from './pages/centers/add-center/add-center.component';
import { ListCenterComponent } from './pages/centers/list-center/list-center.component';
import { ListOrderComponent } from './pages/order/list-order/list-order.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ShowAbstractProductComponent } from './pages/abstract-products/show-abstract-product/show-abstract-product.component';
import { ListAbstractProductComponent } from './pages/abstract-products/list-abstract-product/list-abstract-product.component';
import { AddAbtractProductsComponent } from './pages/abstract-products/add-abtract-products/add-abtract-products.component';
import { AuthGuardService } from './service/auth-guard.service';
import { HomeComponent } from './pages/home/home.component';
import { Routes } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import { AuthComponent } from './layout/auth/auth.component';
import { loginComponent } from './pages/login/login.component';
import { ListUserComponent } from './pages/users/list-user/list-user.component';
import { ShowCenterComponent } from './pages/centers/show-center/show-center.component';

export const AppRoutes: Routes = [
  {
    path: 'login',
    component: loginComponent,
    data: {
      "pageTitle": "LOGIN"
    }
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'list-abstract-product',
        component: ListAbstractProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "LISTABSTRACTPRODUCT"
        }
      },
      {
        path: 'add-abstract-product',
        component: AddAbtractProductsComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ADDABSTRACTPRODUCT"
        }
      },
      {
        path: 'order-abstract-product',
        component: AbstractProductOrderComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ORDERABSTRACTPRODUCT"
        }
      },
      {
        path: 'edit-abstract-product/:id',
        component: AddAbtractProductsComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "EDITABSTRACTPRODUCT"
        }
      },
      {
        path: 'show-abstract-product/:id',
        component: ShowAbstractProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "SHOWABSTRACTPRODUCT"
        }
      },
      {
        path: 'add-product/:abstractProductId',
        component: AddProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ADDPRODUCT"
        }
      },
      {
        path: 'edit-product/:abstractProductId/:id',
        component: AddProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "EDITPRODUCT"
        }
      },

      {
        path: 'list-center',
        component: ListCenterComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "LISTCENTER"
        }
      },
      {
        path: 'show-center/:id',
        component: ShowCenterComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "SHOWCENTER"
        }
      },
      {
        path: 'add-center',
        component: AddCenterComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ADDCENTER"
        }
      },

      {
        path: 'edit-center/:id',
        component: AddCenterComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "EDITCENTER"
        }
      },

      {
        path: 'list-user',
        component: ListUserComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "LISTUSER"
        }

      },
      {
        path: 'list-staf-user',
        component: ListStafUserComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "LISTSTAFUSER"
        }

      },
      {
        path: 'add-user',
        component: AddUserComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ADDUSER"
        }
      },
      {
        path: 'add-center-product/:centerId',
        component: AddCenterProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "ADDCENTERPRODUCT"
        }
      },
      {
        path: 'edit-center-product/:centerId/:id',
        component: AddCenterProductComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "EDITCENTERPRODUCT"
        }
      },
      {
        path: 'list-order',
        component: ListOrderComponent,
        canActivate: [AuthGuardService],
        data: {
          "pageTitle": "LISTORDER"
        }
      },



      // {
      //   path: 'dashboard',
      //   loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      // }, {
      //   path: 'widget',
      //   loadChildren: './pages/widget/widget.module#WidgetModule'
      // }, {
      //   path: 'basic',
      //   loadChildren: './pages/ui-elements/basic/basic.module#BasicModule'
      // }, {
      //   path: 'advance',
      //   loadChildren: './pages/ui-elements/advance/advance.module#AdvanceModule'
      // }, {
      //   path: 'animations',
      //   loadChildren: './pages/animations/animations.module#AnimationsModule'
      // },
      {
        path: 'forms',
        loadChildren: './pages/ui-elements/forms/forms.module#FormsModule'
      },
      //  {
      //   path: 'bootstrap-table',
      //   loadChildren: './pages/ui-elements/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      // }, {
      //   path: 'data-table',
      //   loadChildren: './pages/ui-elements/tables/data-table/data-table.module#DataTableModule',
      // }, {
      //   path: 'charts',
      //   loadChildren: './pages/charts/charts.module#ChartsModule',
      // }, {
      //   path: 'map',
      //   loadChildren: './pages/map/map.module#MapModule',
      // }, {
      //   path: 'maintenance/error',
      //   loadChildren: './pages/maintenance/error/error.module#ErrorModule'
      // }, {
      //   path: 'maintenance/coming-soon',
      //   loadChildren: './pages/maintenance/coming-soon/coming-soon.module#ComingSoonModule'
      // }, {
      //   path: 'user',
      //   loadChildren: './pages/user/user.module#UserModule'
      // }, {
      //   path: 'crm-contact',
      //   loadChildren: './pages/ui-elements/crm-contact/crm-contact.module#CrmContactModule'
      // }, {
      //   path: 'task',
      //   loadChildren: './pages/task/task.module#TaskModule'
      // }, {
      //   path: 'editor',
      //   loadChildren: './pages/ui-elements/editor/editor.module#EditorModule'
      // }, {
      //   path: 'invoice',
      //   loadChildren: './pages/invoice/invoice.module#InvoiceModule'
      // }, {
      //   path: 'file-upload',
      //   loadChildren: './pages/ui-elements/file-upload/file-upload.module#FileUploadUIModule'
      // }, {
      //   path: 'change-log',
      //   loadChildren: './pages/change-log/change-log.module#ChangeLogModule'
      // }, {
      //   path: 'simple-page',
      //   loadChildren: './pages/simple-page/simple-page.module#SimplePageModule'
      // },

    ]
  },

  // { path: '/', component: ListOrderComponent, pathMatch: 'full' }
  //  {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren: './pages/authentication/authentication.module#AuthenticationModule'
  //     }, {
  //       path: 'maintenance/offline-ui',
  //       loadChildren: './pages/maintenance/offline-ui/offline-ui.module#OfflineUiModule'
  //     }
  //   ]
  // }

];
