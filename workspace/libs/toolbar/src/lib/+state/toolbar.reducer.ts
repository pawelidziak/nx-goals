import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ToolbarActions from './toolbar.actions';
import { ToolbarEntity } from './toolbar.models';

export const TOOLBAR_FEATURE_KEY = 'toolbar';

export interface ToolbarState extends EntityState<ToolbarEntity> {
  selectedId?: string | number; // which Toolbar record has been selected
  loaded: boolean; // has the Toolbar list been loaded
  error?: string | null; // last none error (if any)
}

export interface ToolbarPartialState {
  readonly [TOOLBAR_FEATURE_KEY]: ToolbarState;
}

export const toolbarAdapter: EntityAdapter<ToolbarEntity> = createEntityAdapter<
  ToolbarEntity
>();

export const initialState: ToolbarState = toolbarAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const toolbarReducer = createReducer(
  initialState,
  on(ToolbarActions.loadToolbar, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(ToolbarActions.loadToolbarSuccess, (state, { toolbar }) =>
    toolbarAdapter.addAll(toolbar, { ...state, loaded: true })
  ),
  on(ToolbarActions.loadToolbarFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: ToolbarState | undefined, action: Action) {
  return toolbarReducer(state, action);
}
