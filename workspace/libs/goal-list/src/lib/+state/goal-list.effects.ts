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
      run: (
        action: ReturnType<typeof GoalListActions.loadGoalList>,
        state: GoalListPartialState
      ) => {
        return this.service
          .query()
          .pipe(
            map(result =>
              GoalListActions.loadGoalListSuccess({ goalList: result })
            )
          );
      },

      onError: (
        action: ReturnType<typeof GoalListActions.loadGoalList>,
        error
      ) => {
        console.error('Error', error);
        return GoalListActions.loadGoalListFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GoalListPartialState>,
    private service: GoalListService
  ) {}
}
