import {Routes} from '@angular/router';
import {PatentRetrieveComponent} from './patent-retrieve.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: PatentRetrieveComponent,
    children: [
      {
        path: '',
        redirectTo: 'patent-retrieve', // 专利检索
        pathMatch: 'full'
      },
      {
        path: 'patent-activity', // 专利活动
        loadChildren: 'app/modules/app/modules/patent-retrieve/modules/patent-activity/patent-activity.module#PatentActivityModule'
      },
      {
        path: 'history-activity', // 历史活动查询
        loadChildren: 'app/modules/app/modules/patent-retrieve/modules/history-activity/history-activity.module#HistoryActivityModule'
      },
      {
        path: 'activity-configuration', // 活动配置
        loadChildren: 'app/modules/app/modules/patent-retrieve/modules/activity-configuration/activity-configuration.module#ActivityConfigurationModule'
      },
      {
        path: 'activity-rules', // 活动配置
        loadChildren: 'app/modules/app/modules/patent-retrieve/modules/activity-rules/activity-rules.module#ActivityRulesModule'
      }
    ]
  }
];
