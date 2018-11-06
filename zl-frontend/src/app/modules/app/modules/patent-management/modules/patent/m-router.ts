import {Routes} from '@angular/router';
import {PatentComponent} from './patent.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: PatentComponent,
    pathMatch: 'full'
  }
];
