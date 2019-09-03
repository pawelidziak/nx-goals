import { GoalEntity } from './goal.models';
import { GoalState, goalAdapter, initialState } from './goal.reducer';
import * as GoalSelectors from './goal.selectors';

describe('Goal Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGoalId = it => it['id'];
  const createGoalEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalEntity);

  let state;

  beforeEach(() => {
    state = {
      goal: goalAdapter.addAll(
        [
          createGoalEntity('PRODUCT-AAA'),
          createGoalEntity('PRODUCT-BBB'),
          createGoalEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Goal Selectors', () => {
    it('getAllGoal() should return the list of Goal', () => {
      const results = GoalSelectors.getAllGoal(state);
      const selId = getGoalId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GoalSelectors.getSelected(state);
      const selId = getGoalId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGoalLoaded() should return the current 'loaded' status", () => {
      const result = GoalSelectors.getGoalLoaded(state);

      expect(result).toBe(true);
    });

    it("getGoalError() should return the current 'error' state", () => {
      const result = GoalSelectors.getGoalError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
