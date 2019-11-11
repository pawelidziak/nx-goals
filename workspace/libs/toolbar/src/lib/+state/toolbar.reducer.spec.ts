import { ToolbarEntity } from './toolbar.models';
import * as ToolbarActions from './toolbar.actions';
import { ToolbarState, initialState, reducer } from './toolbar.reducer';

describe('Toolbar Reducer', () => {
  const createToolbarEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ToolbarEntity);

  beforeEach(() => {});

  describe('valid Toolbar actions', () => {
    it('loadToolbarSuccess should return set the list of known Toolbar', () => {
      const toolbar = [
        createToolbarEntity('PRODUCT-AAA'),
        createToolbarEntity('PRODUCT-zzz')
      ];
      const action = ToolbarActions.loadToolbarSuccess({ toolbar });

      const result: ToolbarState = reducer(initialState, action);

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
