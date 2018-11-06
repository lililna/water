import {Routes} from '@angular/router';
import {PatentActivityComponent} from './patent-activity.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: PatentActivityComponent,
    pathMatch: 'full'
  }
];
