import { Directive, QueryList, ElementRef } from '@angular/core';
import { startWith } from 'rxjs/operators';

@Directive({
  selector: '[uiLine]',
  host: { class: 'ui-line' }
})
export class LineDirective {
  constructor() {}
}

export function setLines(
  lines: QueryList<LineDirective>,
  element: ElementRef<HTMLElement>
) {
  // Note: doesn't need to unsubscribe, because `changes` gets completed by Angular when the view is destroyed.
  lines.changes.pipe(startWith(lines)).subscribe(({ length }) => {
    const classList = element.nativeElement.classList;
    if (length === 2 || length === 3) {
      classList.add(`ui-${length}-line`);
    } else if (length > 3) {
      classList.add(`ui-multi-line`);
    }
  });
}
