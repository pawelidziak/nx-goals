import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  navLinks = [
    { label: 'First', icon: 'add', path: '' },
    { label: 'Second', icon: 'add', path: '' },
    { label: 'Third', icon: 'add', path: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
