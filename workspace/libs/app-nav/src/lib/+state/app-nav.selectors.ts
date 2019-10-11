import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  APPNAV_FEATURE_KEY,
  AppNavState,
  AppNavPartialState,
  appNavAdapter
} from './app-nav.reducer';

// Lookup the 'AppNav' feature state managed by NgRx
export const getAppNavState = createFeatureSelector<
  AppNavPartialState,
  AppNavState
>(APPNAV_FEATURE_KEY);

const { selectAll, selectEntities } = appNavAdapter.getSelectors();

export const getAppNavLoaded = createSelector(
  getAppNavState,
  (state: AppNavState) => state.loaded
);

export const getAppNavError = createSelector(
  getAppNavState,
  (state: AppNavState) => state.error
);

export const getAllAppNav = createSelector(
  getAppNavState,
  (state: AppNavState) => selectAll(state)
);

export const getAppNavEntities = createSelector(
  getAppNavState,
  (state: AppNavState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getAppNavState,
  (state: AppNavState) => state.selectedId
);

export const getSelected = createSelector(
  getAppNavEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
