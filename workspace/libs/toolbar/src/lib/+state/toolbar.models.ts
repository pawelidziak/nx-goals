import { NavigationExtras, Params } from '@angular/router';

/**
 * Interface for the 'Toolbar' data
 */
export interface ToolbarEntity {
  id: string | number; // Primary ID
}

export interface NavLink {
  label: string;
  icon: string;
  center?: boolean;
}
