import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'workspace-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
