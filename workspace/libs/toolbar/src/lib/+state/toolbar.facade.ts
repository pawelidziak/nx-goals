import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromToolbar from './toolbar.reducer';
import * as ToolbarSelectors from './toolbar.selectors';
import * as ToolbarActions from './toolbar.actions';

@Injectable()
export class ToolbarFacade {
  loaded$ = this.store.pipe(select(ToolbarSelectors.getToolbarLoaded));
  allToolbar$ = this.store.pipe(select(ToolbarSelectors.getAllToolbar));
  selectedToolbar$ = this.store.pipe(select(ToolbarSelectors.getSelected));

  constructor(private store: Store<fromToolbar.ToolbarPartialState>) {}

  loadAll() {
    this.store.dispatch(ToolbarActions.loadToolbar());
  }
}
