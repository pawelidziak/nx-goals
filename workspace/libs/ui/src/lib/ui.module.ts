import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list/list.component';
import { LineDirective } from './core/line/line.directive';
import { IconDirective } from './core/icon/icon.directive';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ListComponent,
    ListItemComponent,
    LineDirective,
    IconDirective
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    LineDirective,
    IconDirective
  ]
})
export class UiModule {}
