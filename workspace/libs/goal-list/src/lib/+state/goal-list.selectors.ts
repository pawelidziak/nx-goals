import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GOALLIST_FEATURE_KEY,
  GoalListState,
  GoalListPartialState,
  goalListAdapter
} from './goal-list.reducer';

// Lookup the 'GoalList' feature state managed by NgRx
export const getGoalListState = createFeatureSelector<
  GoalListPartialState,
  GoalListState
>(GOALLIST_FEATURE_KEY);

const { selectAll, selectEntities } = goalListAdapter.getSelectors();

export const getGoalListLoaded = createSelector(
  getGoalListState,
  (state: GoalListState) => state.loaded
);

export const getGoalListError = createSelector(
  getGoalListState,
  (state: GoalListState) => state.error
);

export const getAllGoalList = createSelector(
  getGoalListState,
  (state: GoalListState) => selectAll(state)
);

export const getGoalListEntities = createSelector(
  getGoalListState,
  (state: GoalListState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGoalListState,
  (state: GoalListState) => state.selectedId
);

export const getSelected = createSelector(
  getGoalListEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
