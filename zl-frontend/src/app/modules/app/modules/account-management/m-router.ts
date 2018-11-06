import {Routes} from '@angular/router';
import {AccountManagementComponent} from './account-management.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: AccountManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'account-management', //
        pathMatch: 'full'
      },
      {
        path: 'user', // 用户管理
        loadChildren: 'app/modules/app/modules/account-management/modules/user/user.module#UserModule'
      },
      {
        path: 'role', // 角色管理
        loadChildren: 'app/modules/app/modules/account-management/modules/role/role.module#RoleModule',
      },
      {
        path: 'agency', // 代理机构管理
        loadChildren: 'app/modules/app/modules/account-management/modules/agency/agency.module#AgencyModule',
      },
      {
        path: 'organization-list', // 组织列表
        loadChildren: 'app/modules/app/modules/account-management/modules/organization-list/organization-list.module#OrganizationListModule'
      },
    ]
  }
];
