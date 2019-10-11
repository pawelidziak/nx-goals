import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAppNav from './+state/app-nav.reducer';
import { AppNavEffects } from './+state/app-nav.effects';
import { AppNavFacade } from './+state/app-nav.facade';
import { AppNavComponent } from './app-nav/app-nav.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAppNav.APPNAV_FEATURE_KEY, fromAppNav.reducer),
    EffectsModule.forFeature([AppNavEffects])
  ],
  providers: [AppNavFacade],
  declarations: [AppNavComponent],
  exports: [AppNavComponent]
})
export class AppNavModule {}
