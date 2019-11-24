import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseToolbarButton } from '../base-toolbar-button';

@Component({
  selector: 'workspace-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent extends BaseToolbarButton {
  navigate() {
    this.routerGoHome();
  }
}
