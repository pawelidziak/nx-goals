import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GoalListActions from './goal-list.actions';
import { GoalListEntity } from './goal-list.models';

export const GOALLIST_FEATURE_KEY = 'goalList';

export interface GoalListState extends EntityState<GoalListEntity> {
  selectedId?: string | number; // which GoalList record has been selected
  loaded: boolean; // has the GoalList been loaded
  error?: string | null; // last none error (if any)
}

export interface GoalListPartialState {
  readonly [GOALLIST_FEATURE_KEY]: GoalListState;
}

export const goalListAdapter: EntityAdapter<GoalListEntity> = createEntityAdapter<GoalListEntity>();

export const initialState: GoalListState = goalListAdapter.getInitialState({
  // set initial required properties
  selectedId: null,
  loaded: false
});

const goalListReducer = createReducer(
  initialState,
  on(GoalListActions.loadGoalList, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(GoalListActions.loadGoalListSuccess, (state, { goalList }) =>
    goalListAdapter.addAll(goalList, { ...state, loaded: true })
  ),
  on(GoalListActions.loadGoalListFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(GoalListActions.addGoal, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(GoalListActions.addGoalSuccess, (state, { goal }) => {
    console.log(state);
    return goalListAdapter.addOne(goal, { ...state, loaded: true });
  }),
  on(GoalListActions.addGoalFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: GoalListState | undefined, action: Action) {
  return goalListReducer(state, action);
}
