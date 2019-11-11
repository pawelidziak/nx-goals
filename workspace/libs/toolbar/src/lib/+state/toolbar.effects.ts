import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ToolbarPartialState } from './toolbar.reducer';
import * as ToolbarActions from './toolbar.actions';

@Injectable()
export class ToolbarEffects {
  loadToolbar$ = createEffect(() =>
    this.dataPersistence.fetch(ToolbarActions.loadToolbar, {
      run: (
        action: ReturnType<typeof ToolbarActions.loadToolbar>,
        state: ToolbarPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return ToolbarActions.loadToolbarSuccess({ toolbar: [] });
      },

      onError: (
        action: ReturnType<typeof ToolbarActions.loadToolbar>,
        error
      ) => {
        console.error('Error', error);
        return ToolbarActions.loadToolbarFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ToolbarPartialState>
  ) {}
}
