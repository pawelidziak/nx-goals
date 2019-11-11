import { createAction, props } from '@ngrx/store';
import { ToolbarEntity } from './toolbar.models';

export const loadToolbar = createAction('[Toolbar] Load Toolbar');

export const loadToolbarSuccess = createAction(
  '[Toolbar] Load Toolbar Success',
  props<{ toolbar: ToolbarEntity[] }>()
);

export const loadToolbarFailure = createAction(
  '[Toolbar] Load Toolbar Failure',
  props<{ error: any }>()
);
