import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GoalListFacade } from './+state/goal-list.facade';
import { GoalListState } from '..';

@Injectable()
export class GoalListResolver implements Resolve<GoalListState> {
  constructor(private facade: GoalListFacade) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    this.facade.loadAll();
    return of(true);
  }
}
