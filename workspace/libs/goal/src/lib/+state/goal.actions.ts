import { createAction, props } from '@ngrx/store';
import { GoalEntity } from './goal.models';

export const loadGoal = createAction('[Goal] Load Goal');

export const loadGoalSuccess = createAction(
  '[Goal] Load Goal Success',
  props<{ goal: GoalEntity[] }>()
);

export const loadGoalFailure = createAction(
  '[Goal] Load Goal Failure',
  props<{ error: any }>()
);
