import { NgrxFormsEntity } from './ngrx-forms.models';
import * as NgrxFormsActions from './ngrx-forms.actions';
import { NgrxFormsState, initialState, reducer } from './ngrx-forms.reducer';

describe('NgrxForms Reducer', () => {
  const createNgrxFormsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as NgrxFormsEntity);

  beforeEach(() => {});

  describe('valid NgrxForms actions', () => {
    it('loadNgrxFormsSuccess should return set the list of known NgrxForms', () => {
      const ngrxForms = [
        createNgrxFormsEntity('PRODUCT-AAA'),
        createNgrxFormsEntity('PRODUCT-zzz')
      ];
      const action = NgrxFormsActions.loadNgrxFormsSuccess({ ngrxForms });

      const result: NgrxFormsState = reducer(initialState, action);

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
