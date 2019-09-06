import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoal from './+state/goal.reducer';
import { GoalEffects } from './+state/goal.effects';
import { GoalFacade } from './+state/goal.facade';
import { GoalComponent } from './goal/goal.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(fromGoal.GOAL_FEATURE_KEY, fromGoal.reducer),

    EffectsModule.forFeature([GoalEffects])
  ],
  providers: [GoalFacade],
  declarations: [GoalComponent],
  exports: [GoalComponent]
})
export class GoalModule {}
