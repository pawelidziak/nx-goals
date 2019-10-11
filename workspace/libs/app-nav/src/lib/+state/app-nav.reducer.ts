import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as AppNavActions from './app-nav.actions';
import { AppNavEntity } from './app-nav.models';

export const APPNAV_FEATURE_KEY = 'appNav';

export interface AppNavState extends EntityState<AppNavEntity> {
  selectedId?: string | number; // which AppNav record has been selected
  loaded: boolean; // has the AppNav list been loaded
  error?: string | null; // last none error (if any)
}

export interface AppNavPartialState {
  readonly [APPNAV_FEATURE_KEY]: AppNavState;
}

export const appNavAdapter: EntityAdapter<AppNavEntity> = createEntityAdapter<
  AppNavEntity
>();

export const initialState: AppNavState = appNavAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const appNavReducer = createReducer(
  initialState,
  on(AppNavActions.loadAppNav, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(AppNavActions.loadAppNavSuccess, (state, { appNav }) =>
    appNavAdapter.addAll(appNav, { ...state, loaded: true })
  ),
  on(AppNavActions.loadAppNavFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: AppNavState | undefined, action: Action) {
  return appNavReducer(state, action);
}
