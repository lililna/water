import { Routes} from '@angular/router';
import {DefaultComponent} from './views/default/default.component';
export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: DefaultComponent,
    pathMatch: 'full',

  },
  {
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: 'app/modules/app/app.module#AppModule',
  }
];
