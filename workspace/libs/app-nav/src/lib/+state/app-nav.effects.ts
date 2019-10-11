import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AppNavPartialState } from './app-nav.reducer';
import * as AppNavActions from './app-nav.actions';

@Injectable()
export class AppNavEffects {
  loadAppNav$ = createEffect(() =>
    this.dataPersistence.fetch(AppNavActions.loadAppNav, {
      run: (
        action: ReturnType<typeof AppNavActions.loadAppNav>,
        state: AppNavPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AppNavActions.loadAppNavSuccess({ appNav: [] });
      },

      onError: (action: ReturnType<typeof AppNavActions.loadAppNav>, error) => {
        console.error('Error', error);
        return AppNavActions.loadAppNavFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppNavPartialState>
  ) {}
}
