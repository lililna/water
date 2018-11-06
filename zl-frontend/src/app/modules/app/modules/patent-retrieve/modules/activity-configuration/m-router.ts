import {Routes} from '@angular/router';
import {ActivityConfigurationComponent} from './activity-configuration.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: ActivityConfigurationComponent,
    pathMatch: 'full'
  }
];
