import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ToolbarActions from './toolbar.actions';

export const TOOLBAR_FEATURE_KEY = 'toolbar';

export interface NgrxToolbar {
  
}

export interface ToolbarState {
  readonly ngrxToolbar: NgrxToolbar;
}

export const initialState: NgrxToolbar = {
  navLinks: []
};

const toolbarReducer = createReducer(
  initialState
);

export function reducer(state: NgrxToolbar | undefined, action: Action) {
  return toolbarReducer(state, action);
}
