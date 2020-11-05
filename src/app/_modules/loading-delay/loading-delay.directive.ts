import { Directive, OnInit, ElementRef, style } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { stream } from 'xlsx/types';

const DELAY = 500;

@Directive({
  selector: '[appLoadingDelay]',
  exportAs: 'loadingDelay'
})
export class LoadingDelayDirective implements OnInit {

  subjectLoadingState = new BehaviorSubject<boolean>(false);
  timeout;
  box;
  loadingEle;
  mask;


  constructor(private _elementRef: ElementRef) {

  }

  ngOnInit(): void {
    this._elementRef.nativeElement.insertAdjacentHTML('afterbegin',
      `<div id="boxes">
        <div class="loading"></div>
        <div id="mask"></div>
      </div>`);

    this.mask = this._elementRef.nativeElement.querySelector('#mask');
    this.mask.style['display'] = 'block';
    this.mask.style['width'] = '100%';
    this.mask.style['height'] = '100%';
    this.mask.style['left'] = 'unset';
    this.mask.style['top'] = '0';
    this.mask.style.setProperty('opacity', 0.4, 'important');

    // const boxWindow = this._elementRef.nativeElement.querySelector('#boxes .window');
    // boxWindow.style.display = 'block';
    // boxWindow.style.left = '0';
    // boxWindow.style.right = '0';
    // boxWindow.style.top = '40%';
    // boxWindow.style.margin = '0 auto';

    this.loadingEle = this._elementRef.nativeElement.querySelector('#boxes .loading');
    this.loadingEle.style['background-color'] = 'rgba(0, 0, 0, 0)';
    this.loadingEle.style['background-image'] = "url('/assets/images/Spinner-1s-200px.gif')";
    this.loadingEle.style['background-position'] = 'center';
    this.loadingEle.style['background-repeat'] = 'no-repeat';
    this.loadingEle.style['background-size'] = '50px 50px';
    this.loadingEle.style['content'] = '""';
    this.loadingEle.style['background-size'] = '50px 50px';
    this.loadingEle.style['height'] = '50px';
    this.loadingEle.style['width'] = '100%';
    this.loadingEle.style['position'] = 'absolute';
    this.loadingEle.style['top'] = '45%';
    this.loadingEle.style['margin-top'] = '0px';
    this.loadingEle.style['z-index'] = '1';

    this.box = this._elementRef.nativeElement.querySelector('#boxes');
    this.hide();
  }

  hide() {
    clearTimeout(this.timeout);
    this.box.style['display'] = 'none';
    this.subjectLoadingState.next(false);
  }

  show(options = {}) {
    const delay = options.hasOwnProperty('delay') ? +options['delay'] : DELAY;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if (options['loading'] != null) {
        for (const key in options['loading']) {
          if (options['loading'].hasOwnProperty(key) && options['loading'][key] != null) {
            let mVal = options['loading'][key];
            if (typeof mVal === 'string' && mVal.trim().toLowerCase().endsWith('!important')) {
              mVal = mVal.trim().replace(/!important$/i, '').trim();
              this.loadingEle.style.setProperty(key, mVal, 'important');
            } else {
              this.loadingEle.style[key] = mVal;
            }

          }
        }
      }
      if (options['mask'] != null) {
        for (const key in options['mask']) {
          if (options['mask'].hasOwnProperty(key) && options['mask'][key] != null) {
            let mVal = options['mask'][key];
            if (typeof mVal === 'string' && mVal.trim().toLowerCase().endsWith('!important')) {
              mVal = mVal.trim().replace(/!important$/i, '').trim();
              this.mask.style.setProperty(key, mVal, 'important');
            } else {
              this.mask.style[key] = mVal;
            }

          }
        }
      }

      if (options['box'] != null) {
        for (const key in options['box']) {
          if (options['box'].hasOwnProperty(key) && options['box'][key] != null) {
            let mVal = options['box'][key];
            if (typeof mVal === 'string' && mVal.trim().toLowerCase().endsWith('!important')) {
              mVal = mVal.trim().replace(/!important$/i, '').trim();
              this.box.style.setProperty(key, mVal, 'important');
            } else {
              this.box.style[key] = mVal;
            }

          }
        }
      }
      this.box.style['display'] = 'block';
      this.subjectLoadingState.next(true);
    }, delay);
  }



}
