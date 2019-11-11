import { ValidatorFn } from '@angular/forms';

/**
 * Interface for the 'NgrxForms' data
 */
export interface NgrxForms {
  data: any;
  structure: Field[];
  valid: boolean;
  errors: Errors;
  touched: boolean;
}

export interface Field {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  validator?: ValidatorFn[];
  attrs?: any;
  styles?: any;
}

export type FieldType = 'INPUT' | 'TEXTAREA' | 'DATEPICKER' | 'SELECT';

export interface Errors {
  [key: string]: string;
}
