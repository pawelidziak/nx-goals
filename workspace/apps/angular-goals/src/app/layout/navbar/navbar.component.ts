import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { label: 'Goals', icon: 'trending_up', path: 'goals' },
    { label: 'Add', icon: 'add', path: 'goals/add', center: true },
    { label: 'Settings', icon: 'settings', path: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
