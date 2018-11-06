import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeContentServices} from './snippets/services/services.module';
import { FeatureEffectsModule} from './snippets/effects/feature.effects.module';
import { FeatureStoreModule} from './snippets/reducers/feature.store.module';
import { SharedModule } from './snippets/components/shared.module';
import { ROUTE_CONFIG} from './m-router';
import { RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FeatureEffectsModule,
    FeatureStoreModule,
    SharedModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [HomeComponent],
  providers: [HomeContentServices]
})
export class HomeModule { }
