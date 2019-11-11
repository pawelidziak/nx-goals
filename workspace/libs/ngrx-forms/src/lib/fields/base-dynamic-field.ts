import { Input } from '@angular/core';
import { Field } from '@workspace/ngrx-forms';
import { FormGroup } from '@angular/forms';

export class BaseDynamicField {
  @Input() field: Field;
  @Input() group: FormGroup;

  getStyles() {
    if (!this.field.styles) {
      return;
    }
    return { ...this.field.styles };
  }
}
