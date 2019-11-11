import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ToolbarEffects } from './toolbar.effects';
import * as ToolbarActions from './toolbar.actions';

describe('ToolbarEffects', () => {
  let actions: Observable<any>;
  let effects: ToolbarEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ToolbarEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(ToolbarEffects);
  });

  describe('loadToolbar$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ToolbarActions.loadToolbar() });

      const expected = hot('-a-|', {
        a: ToolbarActions.loadToolbarSuccess({ toolbar: [] })
      });

      expect(effects.loadToolbar$).toBeObservable(expected);
    });
  });
});
