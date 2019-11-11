import { ToolbarEntity } from './toolbar.models';
import { ToolbarState, toolbarAdapter, initialState } from './toolbar.reducer';
import * as ToolbarSelectors from './toolbar.selectors';

describe('Toolbar Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getToolbarId = it => it['id'];
  const createToolbarEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ToolbarEntity);

  let state;

  beforeEach(() => {
    state = {
      toolbar: toolbarAdapter.addAll(
        [
          createToolbarEntity('PRODUCT-AAA'),
          createToolbarEntity('PRODUCT-BBB'),
          createToolbarEntity('PRODUCT-CCC')
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

  describe('Toolbar Selectors', () => {
    it('getAllToolbar() should return the list of Toolbar', () => {
      const results = ToolbarSelectors.getAllToolbar(state);
      const selId = getToolbarId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ToolbarSelectors.getSelected(state);
      const selId = getToolbarId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getToolbarLoaded() should return the current 'loaded' status", () => {
      const result = ToolbarSelectors.getToolbarLoaded(state);

      expect(result).toBe(true);
    });

    it("getToolbarError() should return the current 'error' state", () => {
      const result = ToolbarSelectors.getToolbarError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
