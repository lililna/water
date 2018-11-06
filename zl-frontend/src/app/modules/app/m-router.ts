import { Routes} from '@angular/router';
import { AppComponent} from './app.component';
import {PatentManagementComponent} from './modules/patent-management/patent-management.component';

export  const ROUTE_CONFIG: Routes = [{
  path: '',
  component: AppComponent,
  canActivate: [],
  children: [
    {
      path: '',
      redirectTo: 'app', //
      pathMatch: 'full'
    },
    {
      path: 'home', // 首页
      loadChildren: 'app/modules/app/modules/home/home.module#HomeModule',
    },
    {
      path: 'patent-management', // 专利管理
      loadChildren: 'app/modules/app/modules/patent-management/patent-management.module#PatentManagementModule',
    },
    {
      path: 'patent-retrieve', // 专利检索
      loadChildren: 'app/modules/app/modules/patent-retrieve/patent-retrieve.module#PatentRetrieveModule'
    },
    {
      path: 'pay-reminders', // 缴费提醒
      loadChildren: 'app/modules/app/modules/pay-reminders/pay-reminders.module#PayRemindersModule'
    },
    {
      path: 'account-management', // 账号管理
      loadChildren: 'app/modules/app/modules/account-management/account-management.module#AccountManagementModule'
    },
    {
      path: 'activity-management', // 活动管理
      loadChildren: 'app/modules/app/modules/activity-management/activity-management.module#ActivityManagementModule'
    }
  ]
}]

