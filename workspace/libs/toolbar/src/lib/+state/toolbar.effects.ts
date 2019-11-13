import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as ToolbarActions from './toolbar.actions';

@Injectable()
export class ToolbarEffects {
  navigate$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ToolbarActions.toolbarGo),
        map(action => action.route),
        tap(({ path, query: queryParams, extras }) =>
          this.router.navigate(path, { queryParams, ...extras })
        )
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ToolbarActions.toolbarBack),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ToolbarActions.toolbarForward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );

  navigateHome$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ToolbarActions.toolbarHome),
        tap(() => this.router.navigateByUrl(''))
      ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
