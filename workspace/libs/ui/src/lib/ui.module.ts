import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { LineDirective } from './core/line/line.directive';
import { IconDirective } from './core/icon/icon.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ListComponent,
    LineDirective,
    IconDirective
  ],
  exports: [
    ListComponent,
    LineDirective,
    IconDirective
  ]
})
export class UiModule {}
