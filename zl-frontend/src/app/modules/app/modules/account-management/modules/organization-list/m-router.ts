import {Routes} from '@angular/router';
import {OrganizationListComponent} from './organization-list.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: OrganizationListComponent,
    pathMatch: 'full'
  }
];
