import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[gauge-color]'
})
export class GaugeColorDirective {

  constructor(private _elementRef: ElementRef) { }

  /**
   * Set color.
   * @param color color to set
   */
  setColor(color: string) {
    this._elementRef.nativeElement.style.color = color;
  }
}
