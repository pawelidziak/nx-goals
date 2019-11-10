import { createReducer, on, Action, State } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as NgrxFormsActions from './ngrx-forms.actions';
import { NgrxForms } from './ngrx-forms.models';

export const NGRXFORMS_FEATURE_KEY = 'ngrxForms';

export interface NgrxFormsState {
  readonly ngrxForms: NgrxForms;
}

export const initialState: NgrxForms = {
  data: {},
  structure: [],
  valid: true,
  errors: {},
  touched: false
};

const ngrxFormsReducer = createReducer(
  initialState,
  on(NgrxFormsActions.setData, (state, { ngrxForms }) => ({
    ...state,
    data: ngrxForms
  })),
  on(NgrxFormsActions.updateData, (state, { ngrxForms }) => {
    const data = { ...state.data, ...ngrxForms };
    return { ...state, data, touched: true };
  }),
  on(NgrxFormsActions.setStructure, (state, { structure }) => {
    const newStructure = structure ? structure.slice(0) : [];
    return { ...state, structure: newStructure };
  }),
  on(NgrxFormsActions.setErrors, (state, { errors }) => ({
    ...state,
    errors: errors
  })),
  on(NgrxFormsActions.initializeErrors, state => ({ ...state, errors: {} })),
  on(NgrxFormsActions.initializeForm, () => initialState),
  on(NgrxFormsActions.resetForm, state => ({ ...state, touched: false }))
);

export function reducer(state: NgrxForms | undefined, action: Action) {
  return ngrxFormsReducer(state, action);
}
