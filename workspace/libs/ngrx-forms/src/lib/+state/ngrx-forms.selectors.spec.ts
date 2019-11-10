import { NgrxFormsEntity } from './ngrx-forms.models';
import {
  NgrxFormsState,
  ngrxFormsAdapter,
  initialState
} from './ngrx-forms.reducer';
import * as NgrxFormsSelectors from './ngrx-forms.selectors';

describe('NgrxForms Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getNgrxFormsId = it => it['id'];
  const createNgrxFormsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as NgrxFormsEntity);

  let state;

  beforeEach(() => {
    state = {
      ngrxForms: ngrxFormsAdapter.addAll(
        [
          createNgrxFormsEntity('PRODUCT-AAA'),
          createNgrxFormsEntity('PRODUCT-BBB'),
          createNgrxFormsEntity('PRODUCT-CCC')
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

  describe('NgrxForms Selectors', () => {
    it('getAllNgrxForms() should return the list of NgrxForms', () => {
      const results = NgrxFormsSelectors.getAllNgrxForms(state);
      const selId = getNgrxFormsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = NgrxFormsSelectors.getSelected(state);
      const selId = getNgrxFormsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getNgrxFormsLoaded() should return the current 'loaded' status", () => {
      const result = NgrxFormsSelectors.getNgrxFormsLoaded(state);

      expect(result).toBe(true);
    });

    it("getNgrxFormsError() should return the current 'error' state", () => {
      const result = NgrxFormsSelectors.getNgrxFormsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
