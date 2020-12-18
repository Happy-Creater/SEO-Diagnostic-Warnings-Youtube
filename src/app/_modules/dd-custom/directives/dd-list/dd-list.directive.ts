import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[dd-list]'
})
export class DDListDirective implements OnInit {
  /**
   * Max height of dropdown list.
   */
  @Input('max-height')
  maxHeight: string;
  private isShow: boolean = false;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) { }

  ngOnInit() {
    this.updateMaxHeight();
    this.hide();
  }
  /**
   * Update max height of dropdown list.
   */
  updateMaxHeight() {
    if (this.maxHeight) {
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'max-height', this.maxHeight);
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'overflow', 'auto');
    } else {
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'max-height', 'auto');
      this._renderer.setElementStyle(this._elementRef.nativeElement, 'overflow', 'none');
    }
  }
  /**
   * Show dropdown list.
   */
  show() {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'block');
    this.isShow = true;
  }
  /**
   * Hide dropdown list.
   */
  hide() {
    this._renderer.setElementStyle(this._elementRef.nativeElement, 'display', 'none');
    this.isShow = false;
  }
  /**
   * Returns true if dropdown list is visible.
   */
  isVisible() {
    return this.isShow;
  }
}
