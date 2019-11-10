import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGoalList from './+state/goal-list.reducer';
import { GoalListEffects } from './+state/goal-list.effects';
import { GoalListFacade } from './+state/goal-list.facade';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalListResolver } from './goal-list-resolver';
import { GoalListService } from './goal-list.service';
import { UiModule } from '@workspace/ui';
import { MatIconModule } from '@angular/material/icon';
import { GoalAddComponent } from './goal-add/goal-add.component';
import { NgrxFormsModule } from '@workspace/ngrx-forms';

@NgModule({
  imports: [
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: GoalListComponent,
        resolve: { GoalListResolver }
      },
      {
        path: 'add',
        component: GoalAddComponent
      }
    ]),

    StoreModule.forFeature(
      fromGoalList.GOALLIST_FEATURE_KEY,
      fromGoalList.reducer
    ),

    EffectsModule.forFeature([GoalListEffects]),
    UiModule,
    MatIconModule
  ],
  providers: [
    GoalListFacade,
    GoalListResolver,
    GoalListEffects,
    GoalListService
  ],
  declarations: [GoalListComponent, GoalAddComponent],
  exports: [GoalListComponent, GoalAddComponent]
})
export class GoalListModule {}
