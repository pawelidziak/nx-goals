import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GoalEffects } from './goal.effects';
import * as GoalActions from './goal.actions';

describe('GoalEffects', () => {
  let actions: Observable<any>;
  let effects: GoalEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GoalEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(GoalEffects);
  });

  describe('loadGoal$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GoalActions.loadGoal() });

      const expected = hot('-a-|', {
        a: GoalActions.loadGoalSuccess({ goal: [] })
      });

      expect(effects.loadGoal$).toBeObservable(expected);
    });
  });
});
