import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { GoalListFacade } from '../+state/goal-list.facade';
import { Observable, from } from 'rxjs';
import { GoalListEntity } from '../+state/goal-list.models';

@Component({
  selector: 'workspace-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalListComponent implements OnInit {
  loaded$: Observable<boolean>;
  goals$: Observable<GoalListEntity[]>;

  constructor(private facade: GoalListFacade) {}

  ngOnInit() {
    this.loaded$ = this.facade.loaded$;
    this.goals$ = this.facade.allGoalList$;
  }
}
