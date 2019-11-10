import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as NgrxFormsActions from './ngrx-forms.actions';
import { map } from 'rxjs/operators';

@Injectable()
export class NgrxFormsEffects {
  // setData$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(NgrxFormsActions.setData),
  //     ofType(NgrxFormsActions.updateData),
  //     map(() => NgrxFormsActions.initializeErrors())
  //   )
  // );

  constructor(
    private actions$: Actions
  ) {}
}
