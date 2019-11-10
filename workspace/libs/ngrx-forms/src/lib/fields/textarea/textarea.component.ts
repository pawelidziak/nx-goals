import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicField } from '../base-dynamic-field';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends BaseDynamicField {}
