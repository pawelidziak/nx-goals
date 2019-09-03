import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GOAL_FEATURE_KEY,
  GoalState,
  GoalPartialState,
  goalAdapter
} from './goal.reducer';

// Lookup the 'Goal' feature state managed by NgRx
export const getGoalState = createFeatureSelector<GoalPartialState, GoalState>(
  GOAL_FEATURE_KEY
);

const { selectAll, selectEntities } = goalAdapter.getSelectors();

export const getGoalLoaded = createSelector(
  getGoalState,
  (state: GoalState) => state.loaded
);

export const getGoalError = createSelector(
  getGoalState,
  (state: GoalState) => state.error
);

export const getAllGoal = createSelector(
  getGoalState,
  (state: GoalState) => selectAll(state)
);

export const getGoalEntities = createSelector(
  getGoalState,
  (state: GoalState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGoalState,
  (state: GoalState) => state.selectedId
);

export const getSelected = createSelector(
  getGoalEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
