import { createAction, props } from '@ngrx/store';
import { NavLink } from './toolbar.models';

export const toolbarSetLinks = createAction(
  '[Toolbar] Set Links',
  props<{ links: NavLink[] }>()
);
