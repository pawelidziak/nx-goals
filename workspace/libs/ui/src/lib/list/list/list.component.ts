import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
