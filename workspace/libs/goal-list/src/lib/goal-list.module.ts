import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoalList from './+state/goal-list.reducer';
import { GoalListEffects } from './+state/goal-list.effects';
import { GoalListFacade } from './+state/goal-list.facade';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalListItemComponent } from './goal-list-item/goal-list-item.component';
import { GoalListResolver } from './goal-list-resolver';
import { GoalListService } from './goal-list.service';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: GoalListComponent,
        resolve: { GoalListResolver }
      }
    ]),

    StoreModule.forFeature(
      fromGoalList.GOALLIST_FEATURE_KEY,
      fromGoalList.reducer
    ),

    EffectsModule.forFeature([GoalListEffects])
  ],
  providers: [
    GoalListFacade,
    GoalListResolver,
    GoalListEffects,
    GoalListService
  ],
  declarations: [GoalListComponent, GoalListItemComponent],
  exports: [GoalListComponent]
})
export class GoalListModule {}
