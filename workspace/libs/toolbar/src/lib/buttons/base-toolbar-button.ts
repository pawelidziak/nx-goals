import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export class BaseToolbarButton {
  @Input() label: string;
  @Input() path: string;
  @Input() minWidth: number;

  location = (): Location => this._location;
  router = (): Router => this._router;

  constructor(private _location: Location, private _router: Router) {}

  routerGoHome(path?: string) {
    this._router.navigateByUrl(path ? path : '/');
  }

  locationGoBack() {
    this._location.back();
  }
}
