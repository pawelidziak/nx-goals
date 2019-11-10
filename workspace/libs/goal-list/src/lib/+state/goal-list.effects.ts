import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { GoalListPartialState } from './goal-list.reducer';
import * as GoalListActions from './goal-list.actions';
import { GoalListService } from '../goal-list.service';
import { map } from 'rxjs/operators';

@Injectable()
export class GoalListEffects {
  loadGoalList$ = createEffect(() =>
    this.dataPersistence.fetch(GoalListActions.loadGoalList, {
      run: () =>
        this.service
          .query()
          .pipe(
            map(result =>
              GoalListActions.loadGoalListSuccess({ goalList: result })
            )
          ),
      onError: error => {
        console.error('Error', error);
        return GoalListActions.loadGoalListFailure({ error });
      }
    })
  );

  // addGoal$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(GoalListActions.addGoal),
  //     switchMap(action => this.service.addGoal1(action.goal)),
  //     take(1),
  //     map(goal => GoalListActions.addGoalSuccess({ goal })),
  //     catchError(error => of(GoalListActions.addGoalFailure({ error })))
  //   )
  // );

  addGoal$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(GoalListActions.addGoal, {
      run: (action: ReturnType<typeof GoalListActions.addGoal>) =>
        this.service
          .addGoal(action.goal)
          .pipe(map(res => GoalListActions.addGoalSuccess({ goal: res }))),
      onError: error => {
        console.error('Error', error);
        return GoalListActions.addGoalFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GoalListPartialState>,
    private service: GoalListService
  ) {}
}
