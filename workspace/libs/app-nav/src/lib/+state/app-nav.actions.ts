import { createAction, props } from '@ngrx/store';
import { AppNavEntity } from './app-nav.models';

export const loadAppNav = createAction('[AppNav] Load AppNav');

export const loadAppNavSuccess = createAction(
  '[AppNav] Load AppNav Success',
  props<{ appNav: AppNavEntity[] }>()
);

export const loadAppNavFailure = createAction(
  '[AppNav] Load AppNav Failure',
  props<{ error: any }>()
);
