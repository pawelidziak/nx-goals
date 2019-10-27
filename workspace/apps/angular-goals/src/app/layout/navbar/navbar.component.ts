import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { label: 'Long-term', icon: 'insert_chart_outlined', path: '' },
    { label: 'For today', icon: 'today', path: 'goals' },
    { label: 'Progress', icon: 'trending_up', path: '' },
    // { label: 'Settings', icon: 'settings', path: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
