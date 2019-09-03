import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromGoalList from './goal-list.reducer';
import * as GoalListSelectors from './goal-list.selectors';
import * as GoalListActions from './goal-list.actions';

@Injectable()
export class GoalListFacade {
  loaded$ = this.store.pipe(select(GoalListSelectors.getGoalListLoaded));
  allGoalList$ = this.store.pipe(select(GoalListSelectors.getAllGoalList));
  selectedGoalList$ = this.store.pipe(select(GoalListSelectors.getSelected));

  constructor(private store: Store<fromGoalList.GoalListPartialState>) {}

  loadAll() {
    this.store.dispatch(GoalListActions.loadGoalList());
  }
}
