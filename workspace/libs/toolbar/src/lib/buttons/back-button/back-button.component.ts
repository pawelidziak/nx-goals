import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseToolbarButton } from '../base-toolbar-button';

@Component({
  selector: 'workspace-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent extends BaseToolbarButton implements OnInit {
  ngOnInit() {}

  goBack() {
    this.locationGoBack();
  }
}
