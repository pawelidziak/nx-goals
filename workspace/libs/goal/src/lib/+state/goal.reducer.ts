import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GoalActions from './goal.actions';
import { GoalEntity } from './goal.models';

export const GOAL_FEATURE_KEY = 'goal';

export interface GoalState extends EntityState<GoalEntity> {
  selectedId?: string | number; // which Goal record has been selected
  loaded: boolean; // has the Goal list been loaded
  error?: string | null; // last none error (if any)
}

export interface GoalPartialState {
  readonly [GOAL_FEATURE_KEY]: GoalState;
}

export const goalAdapter: EntityAdapter<GoalEntity> = createEntityAdapter<
  GoalEntity
>();

export const initialState: GoalState = goalAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const goalReducer = createReducer(
  initialState,
  on(GoalActions.loadGoal, state => ({ ...state, loaded: false, error: null })),
  on(GoalActions.loadGoalSuccess, (state, { goal }) =>
    goalAdapter.addAll(goal, { ...state, loaded: true })
  ),
  on(GoalActions.loadGoalFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: GoalState | undefined, action: Action) {
  return goalReducer(state, action);
}
