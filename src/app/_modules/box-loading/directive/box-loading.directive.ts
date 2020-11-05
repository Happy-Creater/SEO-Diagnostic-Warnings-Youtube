import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[box-loading]',
  exportAs: 'boxLoading'
})
export class BoxLoadingDirective implements OnInit {
  box;
  mask;
  boxWindow;
  top;
  widthBoxWindow;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit(): void {
    this._elementRef.nativeElement.insertAdjacentHTML('afterbegin',
      `<div id="boxes">
        <div id="dialog" class="window">
          <div class="boxes-body">
            <p>Loading...</p>
            <div id="movingBallG">
              <div class="movingBallLineG">
                <div id="movingBallG_1" class="movingBallG"></div>
              </div>
            </div>
          </div>
          <div id="popupfoot"></div>
        </div>
        <div id="mask"></div>
      </div>`);

    this.mask = this._elementRef.nativeElement.querySelector('#mask');
    this.mask.style.display = 'block';
    this.mask.style.width = '100%';
    this.mask.style.height = '100%';
    this.mask.style.left = 'unset';
    this.mask.style.top = '0';

    this.boxWindow = this._elementRef.nativeElement.querySelector('#boxes .window');
    this.boxWindow.style.display = 'block';
    this.boxWindow.style.left = '0';
    this.boxWindow.style.right = '0';
    this.boxWindow.style.top = '40%';
    this.boxWindow.style.margin = '0 auto';

    this.box = this._elementRef.nativeElement.querySelector('#boxes');
    this.hide();
  }

  show() {
    this.box.style.display = 'block';
  }

  /**
   * Show loading box at the center of the mask.
   */
  showCenter() {
    this.show();
    if (this.mask.offsetHeight >= this.boxWindow.offsetHeight) {
      let top = (this.mask.offsetHeight - this.boxWindow.offsetHeight) / 2;
      this.boxWindow.style.top = `${top}px`;

      if (this.top != undefined) {
        this.boxWindow.style.top = `${this.top}px`;
      }
      if (this.widthBoxWindow != undefined) {
        this.boxWindow.style.width = this.widthBoxWindow;
      }

    }
  }

  hide() {
    this.box.style.display = 'none';
  }

  setHeight(height) {
    this.mask.style.height = height + '%';
  }

  setWidth(width) {
    this.mask.style.width = width + '%';
  }

  setTop(top) {
    this.top = top;
  }

  setWidthBoxWindow(widthBoxWindow) {
    this.widthBoxWindow = widthBoxWindow;
  }

}
