import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GoalListEffects } from './goal-list.effects';
import * as GoalListActions from './goal-list.actions';

describe('GoalListEffects', () => {
  let actions: Observable<any>;
  let effects: GoalListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GoalListEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(GoalListEffects);
  });

  describe('loadGoalList$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GoalListActions.loadGoalList() });

      const expected = hot('-a-|', {
        a: GoalListActions.loadGoalListSuccess({ goalList: [] })
      });

      expect(effects.loadGoalList$).toBeObservable(expected);
    });
  });
});
