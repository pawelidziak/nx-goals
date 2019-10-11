import { AppNavEntity } from './app-nav.models';
import { AppNavState, appNavAdapter, initialState } from './app-nav.reducer';
import * as AppNavSelectors from './app-nav.selectors';

describe('AppNav Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAppNavId = it => it['id'];
  const createAppNavEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AppNavEntity);

  let state;

  beforeEach(() => {
    state = {
      appNav: appNavAdapter.addAll(
        [
          createAppNavEntity('PRODUCT-AAA'),
          createAppNavEntity('PRODUCT-BBB'),
          createAppNavEntity('PRODUCT-CCC')
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

  describe('AppNav Selectors', () => {
    it('getAllAppNav() should return the list of AppNav', () => {
      const results = AppNavSelectors.getAllAppNav(state);
      const selId = getAppNavId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AppNavSelectors.getSelected(state);
      const selId = getAppNavId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getAppNavLoaded() should return the current 'loaded' status", () => {
      const result = AppNavSelectors.getAppNavLoaded(state);

      expect(result).toBe(true);
    });

    it("getAppNavError() should return the current 'error' state", () => {
      const result = AppNavSelectors.getAppNavError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
