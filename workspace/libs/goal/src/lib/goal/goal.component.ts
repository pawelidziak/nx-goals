import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'feature-goal-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
