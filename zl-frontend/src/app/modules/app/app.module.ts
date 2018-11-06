import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServicesModule} from './snippets/services/services.module';
import {SharedModule} from './snippets/components/shared.module';
import {ROUTE_CONFIG} from './m-router';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './views/header/header.component';
import {LeftTreeComponent} from './views/left-tree/left-tree.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/take';


import 'rxjs/add/operator/withLatestFrom';
// ##############
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { FooterComponent } from './views/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [AppComponent, HeaderComponent, LeftTreeComponent, FooterComponent]
})
export class AppModule {
}
