import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseDynamicField } from '../base-dynamic-field';

@Component({
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent extends BaseDynamicField {}
