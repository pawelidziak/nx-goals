import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NGRXFORMS_FEATURE_KEY } from './ngrx-forms.reducer';
import { NgrxForms } from './ngrx-forms.models';

// Lookup the 'NgrxForms' feature state managed by NgRx
export const getNgrxFormsState = createFeatureSelector<NgrxForms>(
  NGRXFORMS_FEATURE_KEY
);

export const getStructure = createSelector(
  getNgrxFormsState,
  (state: NgrxForms) => state.structure
);
export const getData = createSelector(
  getNgrxFormsState,
  (state: NgrxForms) => state.data
);
export const isValid = createSelector(
  getNgrxFormsState,
  (state: NgrxForms) => state.valid
);
export const getErrors = createSelector(
  getNgrxFormsState,
  (state: NgrxForms) => state.errors
);
export const getTouchedForm = createSelector(
  getNgrxFormsState,
  (state: NgrxForms) => state.touched
);
