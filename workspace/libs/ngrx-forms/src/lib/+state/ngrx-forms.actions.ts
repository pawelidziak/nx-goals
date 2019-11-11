import { createAction, props } from '@ngrx/store';
import { Errors, Field } from './ngrx-forms.models';

export const setData = createAction(
  '[NgrxForms] SET_DATA',
  props<{ ngrxForms: any }>()
);

export const updateData = createAction(
  '[NgrxForms] UPDATE_DATA',
  props<{ ngrxForms: any }>()
);

export const setStructure = createAction(
  '[NgrxForms] SET_STRUCTURE',
  props<{ structure: Field[] }>()
);

export const setErrors = createAction(
  '[NgrxForms] SET_ERRORS',
  props<{ errors: Errors }>()
);

export const initializeErrors = createAction('[NgrxForms] INITIALIZE_ERRORS');

export const initializeForm = createAction('[NgrxForms] INITIALIZE_FORM');

export const resetForm = createAction('[NgrxForms] RESET_FORM');
