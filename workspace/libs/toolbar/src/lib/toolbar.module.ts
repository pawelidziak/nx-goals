import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromToolbar from './+state/toolbar.reducer';
import { ToolbarEffects } from './+state/toolbar.effects';
import { ToolbarFacade } from './+state/toolbar.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromToolbar.TOOLBAR_FEATURE_KEY,
      fromToolbar.reducer
    ),
    EffectsModule.forFeature([ToolbarEffects])
  ],
  providers: [ToolbarFacade]
})
export class ToolbarModule {}
