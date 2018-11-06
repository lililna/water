import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';


//  需要手动添加
import {ROUTE_CONFIG} from './app-router';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppStoreModule} from './snippets/reducers/app.store.module';
import {AppEffectsModule} from './snippets/effects/app.effects.module';

import {DefaultComponent} from './views/default/default.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppStoreModule,
    AppEffectsModule,

    RouterModule.forRoot(ROUTE_CONFIG)
  ],
  providers: [{
    provide: 'BASE_CONFIG',
    useValue: {
      url: 'http://10.18.17.208:8080/api'
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
