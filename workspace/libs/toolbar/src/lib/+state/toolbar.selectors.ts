import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  TOOLBAR_FEATURE_KEY,
  ToolbarState,
  ToolbarPartialState,
  toolbarAdapter
} from './toolbar.reducer';

// Lookup the 'Toolbar' feature state managed by NgRx
export const getToolbarState = createFeatureSelector<
  ToolbarPartialState,
  ToolbarState
>(TOOLBAR_FEATURE_KEY);

const { selectAll, selectEntities } = toolbarAdapter.getSelectors();

export const getToolbarLoaded = createSelector(
  getToolbarState,
  (state: ToolbarState) => state.loaded
);

export const getToolbarError = createSelector(
  getToolbarState,
  (state: ToolbarState) => state.error
);

export const getAllToolbar = createSelector(
  getToolbarState,
  (state: ToolbarState) => selectAll(state)
);

export const getToolbarEntities = createSelector(
  getToolbarState,
  (state: ToolbarState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getToolbarState,
  (state: ToolbarState) => state.selectedId
);

export const getSelected = createSelector(
  getToolbarEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
