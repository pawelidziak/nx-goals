import { NavigationExtras, Params } from '@angular/router';

/**
 * Interface for the 'Toolbar' data
 */
export interface ToolbarEntity {
  id: string | number; // Primary ID
}

export interface RouteAttrs {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface NavLink {
  label: string;
  icon: string;
  center?: boolean;
  route?: RouteAttrs;
}
