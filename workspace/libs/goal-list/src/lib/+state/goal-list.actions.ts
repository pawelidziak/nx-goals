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
