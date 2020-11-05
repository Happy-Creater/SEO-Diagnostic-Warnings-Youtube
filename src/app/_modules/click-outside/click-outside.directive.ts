import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[click-outside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef: ElementRef) { }

  /**
   * Event click outside element.
   */
  @Output('click-outside')
  clickOutside = new EventEmitter<any>();

  @HostListener('document:click', ['$event'])
  onclick(event) {
    var clickedInside = this._elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
