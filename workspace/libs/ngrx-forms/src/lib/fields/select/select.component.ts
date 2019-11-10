import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicField } from '../base-dynamic-field';

@Component({
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseDynamicField {}
