import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { NgrxFormsEntity } from './ngrx-forms.models';
import { NgrxFormsEffects } from './ngrx-forms.effects';
import { NgrxFormsFacade } from './ngrx-forms.facade';

import * as NgrxFormsSelectors from './ngrx-forms.selectors';
import * as NgrxFormsActions from './ngrx-forms.actions';
import {
  NGRXFORMS_FEATURE_KEY,
  NgrxFormsState,
  initialState,
  reducer
} from './ngrx-forms.reducer';

interface TestSchema {
  ngrxForms: NgrxFormsState;
}

describe('NgrxFormsFacade', () => {
  let facade: NgrxFormsFacade;
  let store: Store<TestSchema>;
  const createNgrxFormsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as NgrxFormsEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(NGRXFORMS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([NgrxFormsEffects])
        ],
        providers: [NgrxFormsFacade]
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
      facade = TestBed.get(NgrxFormsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allNgrxForms$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allNgrxForms$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadNgrxFormsSuccess` to manually update list
     */
    it('allNgrxForms$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allNgrxForms$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          NgrxFormsActions.loadNgrxFormsSuccess({
            ngrxForms: [
              createNgrxFormsEntity('AAA'),
              createNgrxFormsEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.allNgrxForms$);
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
