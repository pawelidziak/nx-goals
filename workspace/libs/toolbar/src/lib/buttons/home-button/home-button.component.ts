import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

@Component({
  selector: 'workspace-home-button',
  templateUrl: './home-button.component.html',
  styleUrls: ['./home-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeButtonComponent implements OnInit {
  @Input() label: string;

  constructor() {}

  ngOnInit() {}
}
