import {Routes} from '@angular/router';
import {PayRemindersComponent} from './pay-reminders.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: PayRemindersComponent,
    children: []
  }
];
