import {
  Component,
  OnInit,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { LineDirective, setLines } from '../core/line/line.directive';

@Component({
  selector: 'ui-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit, AfterContentInit {
  @ContentChildren(LineDirective, { descendants: true }) _lines : QueryList<LineDirective>;

  constructor(private _element: ElementRef<HTMLElement>) {}

  ngOnInit() {}

  ngAfterContentInit() {
    setLines(this._lines, this._element);
  }
}
