import { Directive } from '@angular/core';

@Directive({
  selector: '[uiIcon]',
  host: { class: 'ui-icon' }
})
export class IconDirective {

  constructor() { }

}
