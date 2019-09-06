import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
