import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ToolbarActions from './toolbar.actions';
import { ToolbarEntity, NavLink } from './toolbar.models';

export const TOOLBAR_FEATURE_KEY = 'toolbar';

export interface NgrxToolbar {
  navLinks: NavLink[];
}

export interface ToolbarState {
  readonly ngrxToolbar: NgrxToolbar;
}

// export interface ToolbarPartialState {
//   readonly [TOOLBAR_FEATURE_KEY]: ToolbarState;
// }

// export const toolbarAdapter: EntityAdapter<ToolbarEntity> = createEntityAdapter<
//   ToolbarEntity
// >();

export const initialState: NgrxToolbar = {
  navLinks: []
};

const toolbarReducer = createReducer(
  initialState,
  on(ToolbarActions.toolbarSetLinks, (state, { links }) => {
    const newLinks = links ? links.slice(0) : [];
    return { ...state, navLinks: links };
  }),
  // on(ToolbarActions.loadToolbar, state => ({
  //   ...state,
  //   loaded: false,
  //   error: null
  // })),
  // on(ToolbarActions.loadToolbarSuccess, (state, { toolbar }) =>
  //   toolbarAdapter.addAll(toolbar, { ...state, loaded: true })
  // ),
  // on(ToolbarActions.loadToolbarFailure, (state, { error }) => ({
  //   ...state,
  //   error
  // }))
);

export function reducer(state: NgrxToolbar | undefined, action: Action) {
  return toolbarReducer(state, action);
}
