import { GoalListEntity } from './goal-list.models';
import * as GoalListActions from './goal-list.actions';
import { GoalListState, initialState, reducer } from './goal-list.reducer';

describe('GoalList Reducer', () => {
  const createGoalListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalListEntity);

  beforeEach(() => {});

  describe('valid GoalList actions', () => {
    it('loadGoalListSuccess should return set the list of known GoalList', () => {
      const goalList = [
        createGoalListEntity('PRODUCT-AAA'),
        createGoalListEntity('PRODUCT-zzz')
      ];
      const action = GoalListActions.loadGoalListSuccess({ goalList });

      const result: GoalListState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
