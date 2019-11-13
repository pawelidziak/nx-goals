
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { GoalListEntity, Priority } from './+state/goal-list.models';
import { delay } from 'rxjs/operators';

const TEMPORAL_GOAL_LIST: GoalListEntity []= [
  {
    id: '1',
    title: 'Title 1',
    description: 'Desciription 1',
    deadline: new Date(),
    priority: Priority.A
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Desciription 2',
    deadline: new Date(),
    priority: Priority.B
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Desciription 3',
    deadline: new Date(),
    priority: Priority.A
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Desciription 4',
    deadline: new Date(),
    priority: Priority.A
  }
];

@Injectable()
export class GoalListService {
  private list: GoalListEntity[];
  
  constructor() {
    this.list = TEMPORAL_GOAL_LIST;
  }

  query(): Observable<GoalListEntity[]> {
    return of(this.list);
  }

  addGoal(goal: GoalListEntity) {
    this.list.push(goal);
    return of(goal);
  }
}
