import { Routes} from '@angular/router';
import { LoginComponent} from './views/login/login.component';

export const ROUTE_CONFIG: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [LoginGuardService]
  }
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  //   canActivate: [LoginGuardService]
  // }
];
