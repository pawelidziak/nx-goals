import { GoalListEntity } from './goal-list.models';
import {
  GoalListState,
  goalListAdapter,
  initialState
} from './goal-list.reducer';
import * as GoalListSelectors from './goal-list.selectors';

describe('GoalList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGoalListId = it => it['id'];
  const createGoalListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalListEntity);

  let state;

  beforeEach(() => {
    state = {
      goalList: goalListAdapter.addAll(
        [
          createGoalListEntity('PRODUCT-AAA'),
          createGoalListEntity('PRODUCT-BBB'),
          createGoalListEntity('PRODUCT-CCC')
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

  describe('GoalList Selectors', () => {
    it('getAllGoalList() should return the list of GoalList', () => {
      const results = GoalListSelectors.getAllGoalList(state);
      const selId = getGoalListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GoalListSelectors.getSelected(state);
      const selId = getGoalListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGoalListLoaded() should return the current 'loaded' status", () => {
      const result = GoalListSelectors.getGoalListLoaded(state);

      expect(result).toBe(true);
    });

    it("getGoalListError() should return the current 'error' state", () => {
      const result = GoalListSelectors.getGoalListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
