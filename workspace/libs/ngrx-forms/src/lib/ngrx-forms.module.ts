import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgrxForms from './+state/ngrx-forms.reducer';
import { NgrxFormsEffects } from './+state/ngrx-forms.effects';
import { NgrxFormsFacade } from './+state/ngrx-forms.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromNgrxForms.NGRXFORMS_FEATURE_KEY,
      fromNgrxForms.reducer
    ),
    EffectsModule.forFeature([NgrxFormsEffects])
  ],
  providers: [NgrxFormsFacade]
})
export class NgrxFormsModule {}
