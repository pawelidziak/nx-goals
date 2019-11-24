import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import * as ToolbarActions from './toolbar.actions';

@Injectable()
export class ToolbarEffects {

  constructor(
    private actions$: Actions
  ) {}
}
