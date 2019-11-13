import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import * as fromGoalList from './goal-list.reducer';
import * as GoalListSelectors from './goal-list.selectors';
import * as GoalListActions from './goal-list.actions';
import { Priority } from './goal-list.models';

@Injectable()
export class GoalListFacade {
  loaded$ = this.store.pipe(select(GoalListSelectors.getGoalListLoaded));
  allGoalList$ = this.store.pipe(select(GoalListSelectors.getAllGoalList));
  selectedGoalList$ = this.store.pipe(select(GoalListSelectors.getSelected));

  constructor(private store: Store<fromGoalList.GoalListPartialState>) {}

  loadAll() {
    this.store.dispatch(GoalListActions.loadGoalList());
  }

  addGoal() {
    this.store.dispatch(
      GoalListActions.addGoal({
        goal: {
          id: '5',
          title: 'Test',
          description: 'Test desc',
          deadline: new Date(),
          priority: Priority.A
        }
      })
    );
  }
}
