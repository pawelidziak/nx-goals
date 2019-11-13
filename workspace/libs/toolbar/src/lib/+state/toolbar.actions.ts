import { createAction, props } from '@ngrx/store';
import { ToolbarEntity, RouteAttrs } from './toolbar.models';

// export const loadToolbar = createAction('[Toolbar] Load Toolbar');

// export const loadToolbarSuccess = createAction(
//   '[Toolbar] Load Toolbar Success',
//   props<{ toolbar: ToolbarEntity[] }>()
// );

// export const loadToolbarFailure = createAction(
//   '[Toolbar] Load Toolbar Failure',
//   props<{ error: any }>()
// );


export const toolbarGo = createAction(
  '[Toolbar] Go',
  props<{ route: RouteAttrs }>()
);

export const toolbarBack = createAction('[Toolbar] Back');
export const toolbarForward = createAction('[Toolbar] Forward');
export const toolbarHome = createAction('[Toolbar] Home');
