import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AppNavEffects } from './app-nav.effects';
import * as AppNavActions from './app-nav.actions';

describe('AppNavEffects', () => {
  let actions: Observable<any>;
  let effects: AppNavEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AppNavEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(AppNavEffects);
  });

  describe('loadAppNav$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AppNavActions.loadAppNav() });

      const expected = hot('-a-|', {
        a: AppNavActions.loadAppNavSuccess({ appNav: [] })
      });

      expect(effects.loadAppNav$).toBeObservable(expected);
    });
  });
});
