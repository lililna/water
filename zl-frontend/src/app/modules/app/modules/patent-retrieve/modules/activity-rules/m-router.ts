import {Routes} from '@angular/router';
import {ActivityRulesComponent} from './activity-rules.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: ActivityRulesComponent,
    pathMatch: 'full'
  }
];
