import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoalList from './+state/goal-list.reducer';
import { GoalListEffects } from './+state/goal-list.effects';
import { GoalListFacade } from './+state/goal-list.facade';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature(
      fromGoalList.GOALLIST_FEATURE_KEY,
      fromGoalList.reducer
    ),

    EffectsModule.forFeature([GoalListEffects])
  ],
  providers: [GoalListFacade]
})
export class GoalListModule {}
