import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromGoal from './goal.reducer';
import * as GoalSelectors from './goal.selectors';
import * as GoalActions from './goal.actions';

@Injectable()
export class GoalFacade {
  loaded$ = this.store.pipe(select(GoalSelectors.getGoalLoaded));
  allGoal$ = this.store.pipe(select(GoalSelectors.getAllGoal));
  selectedGoal$ = this.store.pipe(select(GoalSelectors.getSelected));

  constructor(private store: Store<fromGoal.GoalPartialState>) {}

  loadAll() {
    this.store.dispatch(GoalActions.loadGoal());
  }
}
