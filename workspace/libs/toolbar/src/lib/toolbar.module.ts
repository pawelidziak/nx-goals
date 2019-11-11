import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromToolbar from './+state/toolbar.reducer';
import { ToolbarEffects } from './+state/toolbar.effects';
import { ToolbarFacade } from './+state/toolbar.facade';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MaterialModules = [MatToolbarModule, MatButtonModule, MatIconModule];
@NgModule({
  imports: [
    CommonModule,
    ...MaterialModules,
    StoreModule.forFeature(
      fromToolbar.TOOLBAR_FEATURE_KEY,
      fromToolbar.reducer
    ),
    EffectsModule.forFeature([ToolbarEffects])
  ],
  providers: [ToolbarFacade],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule {}
