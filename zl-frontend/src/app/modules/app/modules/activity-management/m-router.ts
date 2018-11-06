import {Routes} from '@angular/router';
import {ActivityManagementComponent} from './activity-management.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: ActivityManagementComponent,
    children: []
  }
];
