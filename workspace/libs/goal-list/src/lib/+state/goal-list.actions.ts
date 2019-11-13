import { createAction, props } from '@ngrx/store';
import { GoalListEntity } from './goal-list.models';

export const loadGoalList = createAction('[GoalList] Load GoalList');

export const loadGoalListSuccess = createAction(
  '[GoalList] Load GoalList Success',
  props<{ goalList: GoalListEntity[] }>()
);

export const loadGoalListFailure = createAction(
  '[GoalList] Load GoalList Failure',
  props<{ error: any }>()
);

export const addGoal = createAction(
  '[GoalList] Add Goal',
  props<{ goal: GoalListEntity }>()
);
export const addGoalSuccess = createAction(
  '[GoalList] Add Goal Success',
  props<{ goal: GoalListEntity }>()
);

export const addGoalFailure = createAction(
  '[GoalList] Add Goal Failure',
  props<{ error: any }>()
);
