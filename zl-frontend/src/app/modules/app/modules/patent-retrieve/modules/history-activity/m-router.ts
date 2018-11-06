import {Routes} from '@angular/router';
import {HistoryActivityComponent} from './history-activity.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: HistoryActivityComponent,
    pathMatch: 'full'
  }
];
