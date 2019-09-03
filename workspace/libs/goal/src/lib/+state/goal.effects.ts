import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { GoalPartialState } from './goal.reducer';
import * as GoalActions from './goal.actions';

@Injectable()
export class GoalEffects {
  loadGoal$ = createEffect(() =>
    this.dataPersistence.fetch(GoalActions.loadGoal, {
      run: (
        action: ReturnType<typeof GoalActions.loadGoal>,
        state: GoalPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return GoalActions.loadGoalSuccess({ goal: [] });
      },

      onError: (action: ReturnType<typeof GoalActions.loadGoal>, error) => {
        console.error('Error', error);
        return GoalActions.loadGoalFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GoalPartialState>
  ) {}
}
