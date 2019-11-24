import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ToolbarActions from './toolbar.actions';
import { NavLink } from './toolbar.models';

export const TOOLBAR_FEATURE_KEY = 'toolbar';

export interface NgrxToolbar {
  navLinks: NavLink[];
}

export interface ToolbarState {
  readonly ngrxToolbar: NgrxToolbar;
}

export const initialState: NgrxToolbar = {
  navLinks: []
};

const toolbarReducer = createReducer(
  initialState,
  on(ToolbarActions.toolbarSetLinks, (state, { links }) => {
    const newLinks = links ? links.slice(0) : [];
    return { ...state, navLinks: links };
  })
);

export function reducer(state: NgrxToolbar | undefined, action: Action) {
  return toolbarReducer(state, action);
}
