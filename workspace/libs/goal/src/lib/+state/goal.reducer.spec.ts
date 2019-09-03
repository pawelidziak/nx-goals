import { GoalEntity } from './goal.models';
import * as GoalActions from './goal.actions';
import { GoalState, initialState, reducer } from './goal.reducer';

describe('Goal Reducer', () => {
  const createGoalEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalEntity);

  beforeEach(() => {});

  describe('valid Goal actions', () => {
    it('loadGoalSuccess should return set the list of known Goal', () => {
      const goal = [
        createGoalEntity('PRODUCT-AAA'),
        createGoalEntity('PRODUCT-zzz')
      ];
      const action = GoalActions.loadGoalSuccess({ goal });

      const result: GoalState = reducer(initialState, action);

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
