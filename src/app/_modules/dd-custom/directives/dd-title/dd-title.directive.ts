import { Directive, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[dd-title]'
})
export class DDTitleDirective implements OnInit {
  /**
   * Title listener.
   */
  private titleListener = new Subject<any>();

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
    // create element icon.
    let icon = this._renderer.createElement(this._elementRef.nativeElement, 'span');
    this._renderer.setElementAttribute(icon, 'class', 'glyphicon glyphicon-menu-down');
  }
  /**
   * Returns title listener.
   */
  getTitleListener() {
    return this.titleListener;
  }
  /**
   * Event click.
   * @param event event click
   */
  @HostListener('click', ['$event'])
  onClick(event) {
    this.titleListener.next(event);
  }
}
