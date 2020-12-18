import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[dd-list-header]'
})
export class DDListHeaderDirective implements OnInit {
  /**
   * Dismiss listener.
   */
  private dismissListener = new Subject();

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
    let btn = this._renderer.createElement(this._elementRef.nativeElement, 'button');
    btn.textContent = 'X';
    this._renderer.setElementStyle(btn, 'float', 'right');
    this._renderer.setElementStyle(btn, 'margin-top', '-10px');
    // binding event click.
    this._renderer.listen(btn, 'click', () => {
      this.dismissListener.next();
    });
  }
  /**
   * Returns dismiss listener.
   */
  getDismissListener() {
    return this.dismissListener;
  }
}
