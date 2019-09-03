import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { GoalListPartialState } from './goal-list.reducer';
import * as GoalListActions from './goal-list.actions';

@Injectable()
export class GoalListEffects {
  loadGoalList$ = createEffect(() =>
    this.dataPersistence.fetch(GoalListActions.loadGoalList, {
      run: (
        action: ReturnType<typeof GoalListActions.loadGoalList>,
        state: GoalListPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return GoalListActions.loadGoalListSuccess({ goalList: [] });
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
    private dataPersistence: DataPersistence<GoalListPartialState>
  ) {}
}
