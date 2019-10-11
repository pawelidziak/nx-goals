import { AppNavEntity } from './app-nav.models';
import * as AppNavActions from './app-nav.actions';
import { AppNavState, initialState, reducer } from './app-nav.reducer';

describe('AppNav Reducer', () => {
  const createAppNavEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AppNavEntity);

  beforeEach(() => {});

  describe('valid AppNav actions', () => {
    it('loadAppNavSuccess should return set the list of known AppNav', () => {
      const appNav = [
        createAppNavEntity('PRODUCT-AAA'),
        createAppNavEntity('PRODUCT-zzz')
      ];
      const action = AppNavActions.loadAppNavSuccess({ appNav });

      const result: AppNavState = reducer(initialState, action);

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
