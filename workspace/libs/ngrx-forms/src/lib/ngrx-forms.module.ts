import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromNgrxForms from './+state/ngrx-forms.reducer';
import { NgrxFormsEffects } from './+state/ngrx-forms.effects';
import { NgrxFormsFacade } from './+state/ngrx-forms.facade';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';
import { InputComponent } from './fields/input/input.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectComponent } from './fields/select/select.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    
    StoreModule.forFeature(
      fromNgrxForms.NGRXFORMS_FEATURE_KEY,
      fromNgrxForms.reducer
    ),
    EffectsModule.forFeature([NgrxFormsEffects])
  ],
  providers: [NgrxFormsFacade],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    TextareaComponent,
    SelectComponent
  ],
  entryComponents: [InputComponent, TextareaComponent, SelectComponent],
  exports: [DynamicFormComponent]
})
export class NgrxFormsModule {}
