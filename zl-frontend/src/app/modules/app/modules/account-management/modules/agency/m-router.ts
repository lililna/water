import {Routes} from '@angular/router';
import {AgencyComponent} from './agency.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: AgencyComponent,
    pathMatch: 'full'
  }
];
