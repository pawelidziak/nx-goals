import { Component, OnInit, Input } from '@angular/core';
import { GoalListEntity } from '../+state/goal-list.models';

@Component({
  selector: 'app-goal-list-item',
  templateUrl: './goal-list-item.component.html',
  styleUrls: ['./goal-list-item.component.scss']
})
export class GoalListItemComponent implements OnInit {
  @Input() goal: GoalListEntity;

  constructor() {}

  ngOnInit() {}
}
