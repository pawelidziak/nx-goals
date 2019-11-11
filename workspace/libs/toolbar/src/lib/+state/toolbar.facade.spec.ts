import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { ToolbarEntity } from './toolbar.models';
import { ToolbarEffects } from './toolbar.effects';
import { ToolbarFacade } from './toolbar.facade';

import * as ToolbarSelectors from './toolbar.selectors';
import * as ToolbarActions from './toolbar.actions';
import {
  TOOLBAR_FEATURE_KEY,
  ToolbarState,
  initialState,
  reducer
} from './toolbar.reducer';

interface TestSchema {
  toolbar: ToolbarState;
}

describe('ToolbarFacade', () => {
  let facade: ToolbarFacade;
  let store: Store<TestSchema>;
  const createToolbarEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as ToolbarEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TOOLBAR_FEATURE_KEY, reducer),
          EffectsModule.forFeature([ToolbarEffects])
        ],
        providers: [ToolbarFacade]
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
      facade = TestBed.get(ToolbarFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allToolbar$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allToolbar$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadToolbarSuccess` to manually update list
     */
    it('allToolbar$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allToolbar$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          ToolbarActions.loadToolbarSuccess({
            toolbar: [createToolbarEntity('AAA'), createToolbarEntity('BBB')]
          })
        );

        list = await readFirst(facade.allToolbar$);
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
