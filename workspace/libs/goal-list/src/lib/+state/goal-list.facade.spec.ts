import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { GoalListEntity } from './goal-list.models';
import { GoalListEffects } from './goal-list.effects';
import { GoalListFacade } from './goal-list.facade';

import * as GoalListSelectors from './goal-list.selectors';
import * as GoalListActions from './goal-list.actions';
import {
  GOALLIST_FEATURE_KEY,
  GoalListState,
  initialState,
  reducer
} from './goal-list.reducer';

interface TestSchema {
  goalList: GoalListState;
}

describe('GoalListFacade', () => {
  let facade: GoalListFacade;
  let store: Store<TestSchema>;
  const createGoalListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoalListEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOALLIST_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GoalListEffects])
        ],
        providers: [GoalListFacade]
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
      facade = TestBed.get(GoalListFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allGoalList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allGoalList$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadGoalListSuccess` to manually update list
     */
    it('allGoalList$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allGoalList$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          GoalListActions.loadGoalListSuccess({
            goalList: [createGoalListEntity('AAA'), createGoalListEntity('BBB')]
          })
        );

        list = await readFirst(facade.allGoalList$);
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
