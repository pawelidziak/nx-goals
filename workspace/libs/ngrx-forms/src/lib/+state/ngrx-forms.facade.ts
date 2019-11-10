import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromNgrxForms from './ngrx-forms.reducer';
import * as NgrxFormsSelectors from './ngrx-forms.selectors';
import * as NgrxFormsActions from './ngrx-forms.actions';
import { Field } from './ngrx-forms.models';

@Injectable()
export class NgrxFormsFacade {
  data$ = this.store.select(NgrxFormsSelectors.getData);
  structure$ = this.store.select(NgrxFormsSelectors.getStructure);
  errors$ = this.store.select(NgrxFormsSelectors.getErrors);
  touched$ = this.store.select(NgrxFormsSelectors.getTouchedForm);

  constructor(private store: Store<fromNgrxForms.NgrxFormsState>) {}

  setStructure(structure: Field[]) {
    this.store.dispatch(NgrxFormsActions.setStructure({ structure: structure }));
  }

  setData(data: any) {
    this.store.dispatch(NgrxFormsActions.setData(data));
  }

  updateData(data: any) {
    this.store.dispatch(NgrxFormsActions.updateData(data));
  }

  initializeForm() {
    this.store.dispatch(NgrxFormsActions.initializeForm());
  }

  initializeErrors() {
    this.store.dispatch(NgrxFormsActions.initializeErrors());
  }

  resetForm() {
    this.store.dispatch(NgrxFormsActions.resetForm());
  }
}
