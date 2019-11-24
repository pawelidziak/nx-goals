import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToolbarButtonComponent } from '../toolbar-button/toolbar-button.component';

@Component({
  selector: 'workspace-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent extends ToolbarButtonComponent {}
