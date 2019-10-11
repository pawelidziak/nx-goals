import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromAppNav from './app-nav.reducer';
import * as AppNavSelectors from './app-nav.selectors';
import * as AppNavActions from './app-nav.actions';

@Injectable()
export class AppNavFacade {
  loaded$ = this.store.pipe(select(AppNavSelectors.getAppNavLoaded));
  allAppNav$ = this.store.pipe(select(AppNavSelectors.getAllAppNav));
  selectedAppNav$ = this.store.pipe(select(AppNavSelectors.getSelected));

  constructor(private store: Store<fromAppNav.AppNavPartialState>) {}

  loadAll() {
    this.store.dispatch(AppNavActions.loadAppNav());
  }
}
