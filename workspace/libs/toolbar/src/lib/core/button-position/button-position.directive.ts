import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[toolbarButtonPosition]'
})
export class ButtonPositionDirective implements OnInit {
  @Input() left: number;
  @Input() top: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.sorroundByElement('li');
  }

  sorroundByElement(sourroundBy: string) {
    const parent = this.el.nativeElement.parentNode;

    const liElement = this.renderer.createElement(sourroundBy);
    this.renderer.setStyle(liElement, 'position', 'absolute');
    this.renderer.setStyle(liElement, 'left', `${this.left}%`);
    this.renderer.setStyle(liElement, 'top', `${this.top}%`);
    this.renderer.setStyle(
      liElement,
      'transform',
      `translate(-${this.left}%, -40%)`
    );
    this.renderer.insertBefore(parent, liElement, this.el.nativeElement);
    this.renderer.removeChild(parent, this.el.nativeElement);
    this.renderer.removeAttribute(this.el.nativeElement, 'toolbarActionButton');
    this.renderer.appendChild(liElement, this.el.nativeElement);
  }
}
