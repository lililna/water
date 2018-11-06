import {Routes} from '@angular/router';
import {RemindComponent} from './remind.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: RemindComponent,
    pathMatch: 'full'
  }
];
