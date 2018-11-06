import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './snippets/services/services.module';
import { FeatureEffectsModule } from './snippets/effects/feature.effects.module';
import { FeatureStoreModule } from './snippets/reducers/feature.store.module';
import { SharedModule } from './snippets/components/shared.module';
import { ROUTE_CONFIG } from './m-router';
import { RouterModule } from '@angular/router';
import { AgencyComponent } from './agency.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    FeatureEffectsModule,
    FeatureStoreModule,
    SharedModule,
    RouterModule.forChild(ROUTE_CONFIG)
  ],
  declarations: [AgencyComponent]
})
export class AgencyModule { }
