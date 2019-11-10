import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-goal-add',
  templateUrl: './goal-add.component.html',
  styleUrls: ['./goal-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalAddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
