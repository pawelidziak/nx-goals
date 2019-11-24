import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromToolbar from './toolbar.reducer';
import * as ToolbarSelectors from './toolbar.selectors';
import * as ToolbarActions from './toolbar.actions';
import { NavLink } from './toolbar.models';

@Injectable()
export class ToolbarFacade {
  getNavLinks$ = this.store.pipe(select(ToolbarSelectors.getNavLinks));

  constructor(private store: Store<fromToolbar.ToolbarState>) {}

  setLinks(links: NavLink[]) {
    this.store.dispatch(ToolbarActions.toolbarSetLinks({ links }));
  }
}
