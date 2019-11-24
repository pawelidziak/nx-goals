import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'workspace-toolbar-button',
  templateUrl: './toolbar-button.component.html',
  styleUrls: ['./toolbar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ToolbarButtonComponent {
  @Input() matIcon: string;
  @Input() label: string;
  @Input() path: string;
  @Input() minWidth: number;

  constructor(private location: Location, private router: Router) {}

  navigate() {
    if (this.path === 'LOCATION_BACK') {
      this.location.back();
      return;
    }
    this.router.navigateByUrl(this.path ? this.path : '/');
  }
}
