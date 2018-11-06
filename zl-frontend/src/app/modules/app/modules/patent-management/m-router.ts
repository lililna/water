import {Routes} from '@angular/router';
import {PatentManagementComponent} from './patent-management.component';
import {PatentComponent} from "./modules/patent/patent.component";

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: PatentManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'patent-management', //
        pathMatch: 'full'
      },
      {
        path: 'patent', // 专利管理
        loadChildren: 'app/modules/app/modules/patent-management/modules/patent/patent.module#PatentModule'
      },
      {
        path: 'remind', // 提醒管理
        loadChildren: 'app/modules/app/modules/patent-management/modules/remind/remind.module#RemindModule',
      },
    ]
  }
];
