import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { AppNavEntity } from './app-nav.models';
import { AppNavEffects } from './app-nav.effects';
import { AppNavFacade } from './app-nav.facade';

import * as AppNavSelectors from './app-nav.selectors';
import * as AppNavActions from './app-nav.actions';
import {
  APPNAV_FEATURE_KEY,
  AppNavState,
  initialState,
  reducer
} from './app-nav.reducer';

interface TestSchema {
  appNav: AppNavState;
}

describe('AppNavFacade', () => {
  let facade: AppNavFacade;
  let store: Store<TestSchema>;
  const createAppNavEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as AppNavEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(APPNAV_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AppNavEffects])
        ],
        providers: [AppNavFacade]
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
      facade = TestBed.get(AppNavFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allAppNav$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allAppNav$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadAppNavSuccess` to manually update list
     */
    it('allAppNav$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allAppNav$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          AppNavActions.loadAppNavSuccess({
            appNav: [createAppNavEntity('AAA'), createAppNavEntity('BBB')]
          })
        );

        list = await readFirst(facade.allAppNav$);
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
