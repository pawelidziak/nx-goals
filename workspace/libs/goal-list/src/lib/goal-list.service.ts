import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GoalListEntity } from './+state/goal-list.models';
import { delay } from 'rxjs/operators';

const TEMPORAL_GOAL_LIST: GoalListEntity[] = [
  {
    id: '1',
    icon: 'accessibility',
    iconColor: '',
    title: 'Title 1',
    description: 'Description 1'
  },
  {
    id: '2',
    icon: 'bookmark_border',
    iconColor: '',
    title: 'Title 2',
    description: 'Description 2'
  },
  {
    id: '3',
    icon: 'error',
    iconColor: '',
    title: 'Title 3',
    description: 'Description 3'
  },
  {
    id: '4',
    icon: 'video_label',
    iconColor: '',
    title: 'Title 4',
    description: 'Description 4'
  }
];

@Injectable()
export class GoalListService {
  constructor() {}

  query(): Observable<GoalListEntity[]> {
    return of(TEMPORAL_GOAL_LIST).pipe(delay(1000));
  }

}
