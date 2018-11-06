import {Routes} from '@angular/router';
import {RoleComponent} from './role.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: RoleComponent,
    pathMatch: 'full'
  }
];
