import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoal from './+state/goal.reducer';
import { GoalEffects } from './+state/goal.effects';
import { GoalFacade } from './+state/goal.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(fromGoal.GOAL_FEATURE_KEY, fromGoal.reducer),

    EffectsModule.forFeature([GoalEffects])
  ],
  providers: [GoalFacade]
})
export class GoalModule {}
