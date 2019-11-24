import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[toolbarActionButton]'
})
export class ActionButtonDirective implements AfterViewInit {
  @Input() minWidth: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit() {
    this.addCssClass();
    this.sorroundByElement('li');
  }

  addCssClass() {
    const tagName = this.el.nativeElement.tagName.toLowerCase();
    console.log(tagName);
    if (tagName === 'button' || tagName === 'a') {
      this.el.nativeElement.classList.add('item__button');
    }
  }

  sorroundByElement(sourroundBy: string) {
    // Get parent of the original input element
    const parent = this.el.nativeElement.parentNode;

    // Create a sourroundBy element
    const liElement = this.renderer.createElement(sourroundBy);
    this.renderer.setStyle(
      liElement,
      'min-width',
      `${this.minWidth ? this.minWidth : 0}%`
    );

    // Add the div, just before the input
    this.renderer.insertBefore(parent, liElement, this.el.nativeElement);

    // Remove the input
    this.renderer.removeChild(parent, this.el.nativeElement);

    // Remove the directive attribute (not really necessary, but just to be clean)
    this.renderer.removeAttribute(this.el.nativeElement, 'toolbarActionButton');

    // Re-add it inside the div
    this.renderer.appendChild(liElement, this.el.nativeElement);
  }
}
