import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule} from './snippets/services/services.module';
import { SharedModule } from './snippets/components/shared.module';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ServicesModule,
    HttpModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: []
})
export class LoginModule { }
