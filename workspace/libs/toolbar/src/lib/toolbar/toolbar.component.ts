import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { NavLink, RouteAttrs } from '../+state/toolbar.models';
import { ToolbarFacade } from '../+state/toolbar.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  @Input() height = '45px';
  @Input() color = 'primary';
  @Input() position: 'top' | 'bottom' = 'bottom';
  // @Input() navLinks: NavLink[]; // could pass links by input (now is by state)
  navLinks$: Observable<NavLink[]>;

  constructor(private facade: ToolbarFacade) {}

  ngOnInit() {
    this.navLinks$ = this.facade.getNavLinks$;
  }

  navigate(route: RouteAttrs) {
    if (!route) {
      return;
    }
    this.facade.go(route);
  }
}
