import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ToolbarFacade } from '../../+state/toolbar.facade';

@Component({
  selector: 'workspace-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent implements OnInit {

  constructor(private facade: ToolbarFacade) { }

  ngOnInit() {
  }

  goBack() {
    this.facade.goBack();
  }

}
