import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromToolbar from './+state/toolbar.reducer';
import { ToolbarEffects } from './+state/toolbar.effects';
import { ToolbarFacade } from './+state/toolbar.facade';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ActionButtonDirective } from './core/action-button/action-button.directive';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { HomeButtonComponent } from './buttons/home-button/home-button.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const MaterialModules = [MatButtonModule, MatIconModule];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ...MaterialModules,
    StoreModule.forFeature(
      fromToolbar.TOOLBAR_FEATURE_KEY,
      fromToolbar.reducer
    ),
    EffectsModule.forFeature([ToolbarEffects])
  ],
  providers: [ToolbarFacade],
  declarations: [
    ToolbarComponent,
    ActionButtonDirective,
    BackButtonComponent,
    HomeButtonComponent
  ],
  exports: [
    ToolbarComponent,
    ActionButtonDirective,
    BackButtonComponent,
    HomeButtonComponent
  ]
})
export class ToolbarModule {}
