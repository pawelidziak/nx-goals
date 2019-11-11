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
import { RouteButtonDirective } from './core/route-button/route-button.directive';
import { TitleDirective } from './core/title/title.directive';
import { ActionButtonDirective } from './core/action-button/action-button.directive';
import { BackButtonComponent } from './buttons/back-button/back-button.component';
import { HomeButtonComponent } from './buttons/home-button/home-button.component';

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
  declarations: [ToolbarComponent, RouteButtonDirective, TitleDirective, ActionButtonDirective, BackButtonComponent, HomeButtonComponent],
  exports: [ToolbarComponent, RouteButtonDirective, TitleDirective, ActionButtonDirective, BackButtonComponent, HomeButtonComponent]
})
export class ToolbarModule {}
