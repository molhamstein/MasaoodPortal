import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WithHeaderFooterComponent } from './with-header-footer/with-header-footer.component';
import { WithSocialComponent } from './with-social/with-social.component';
import { WithSocialHeaderFooterComponent } from './with-social-header-footer/with-social-header-footer.component';
import { SharedModule } from '../../../shared/shared.module';

export const LoginRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Login'
    },
    children: [{
      path: 'with-header-footer',
      component: WithHeaderFooterComponent,
      data: {
        breadcrumb: 'Login'
      }
    }, {
      path: 'with-social',
      component: WithSocialComponent,
      data: {
        breadcrumb: 'Login'
      }
    }, {
      path: 'with-social-header-footer',
      component: WithSocialHeaderFooterComponent,
      data: {
        breadcrumb: 'Login'
      }
    }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRoutes),
    SharedModule
  ],
  declarations: [WithHeaderFooterComponent, WithSocialComponent, WithSocialHeaderFooterComponent]
})
export class LoginModule { }
