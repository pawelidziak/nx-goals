import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { NgrxFormsEffects } from './ngrx-forms.effects';
import * as NgrxFormsActions from './ngrx-forms.actions';

describe('NgrxFormsEffects', () => {
  let actions: Observable<any>;
  let effects: NgrxFormsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        NgrxFormsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(NgrxFormsEffects);
  });

  describe('loadNgrxForms$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: NgrxFormsActions.loadNgrxForms() });

      const expected = hot('-a-|', {
        a: NgrxFormsActions.loadNgrxFormsSuccess({ ngrxForms: [] })
      });

      expect(effects.loadNgrxForms$).toBeObservable(expected);
    });
  });
});
