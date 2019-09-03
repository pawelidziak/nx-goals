import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { GoalEntity } from './goal.models';
import { GoalEffects } from './goal.effects';
import { GoalFacade } from './goal.facade';

import * as GoalSelectors from './goal.selectors';
import * as GoalActions from './goal.actions';
import {
  GOAL_FEATURE_KEY,
  GoalState,
  initialState,
  reducer
} from './goal.reducer';

interface TestSchema {
  goal: GoalState;
}

describe('GoalFacade', () => {
  let facade: GoalFacade;
  let store: Store<TestSchema>;
  const createGoalEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOAL_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GoalEffects])
        ],
        providers: [GoalFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(GoalFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allGoal$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allGoal$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadGoalSuccess` to manually update list
     */
    it('allGoal$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allGoal$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          GoalActions.loadGoalSuccess({
            goal: [createGoalEntity('AAA'), createGoalEntity('BBB')]
          })
        );

        list = await readFirst(facade.allGoal$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
