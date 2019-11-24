import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromToolbar from './toolbar.reducer';
import * as ToolbarSelectors from './toolbar.selectors';
import * as ToolbarActions from './toolbar.actions';

@Injectable()
export class ToolbarFacade {

  constructor(private store: Store<fromToolbar.ToolbarState>) {}

}
