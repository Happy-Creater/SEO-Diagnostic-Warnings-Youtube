import { Directive, ElementRef, Renderer, Renderer2, HostListener, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Directive({
  selector: '[textbox-clearable]'
})
export class TextboxClearableDirective implements OnChanges {

  searchClear;

  @Input('class-textbox-clearable')
  classTextbox: string = '';

  @Input('block-clear-width')
  blockClearWidth: string;

  @Input('max-width')
  max_width: string;

  @Input('value')
  value: any;

  @Output('textbox-clearable-change')
  textboxClearableChange = new EventEmitter<String>();

  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private _renderer2: Renderer2) { }

  ngOnInit(): void {
    let maxWidth = this.max_width ? this.max_width : this._elementRef.nativeElement.offsetWidth + 'px';
    this._elementRef.nativeElement.insertAdjacentHTML('beforebegin', '<div class="block-clear ' + this.classTextbox + '"></div>');
    let blockClear = this._elementRef.nativeElement.parentElement.querySelector('div.block-clear');
    this._renderer2.appendChild(blockClear, this._elementRef.nativeElement);
    blockClear.style.maxWidth = maxWidth;
    if (this.blockClearWidth != undefined) {
      blockClear.style.width = this.blockClearWidth;
    }
    this._elementRef.nativeElement.style.width = '100%';
    this._elementRef.nativeElement.style.maxWidth = maxWidth;
    this._elementRef.nativeElement.insertAdjacentHTML('afterend', '<span class="icon-remove-black searchclear"></span>');

    this.searchClear = this._elementRef.nativeElement.parentElement.querySelector('span.searchclear');
    this.hideSearchClear();
    this._renderer.listen(this.searchClear, 'click', () => {
      this._elementRef.nativeElement.value = '';
      this.hideSearchClear();
      this._elementRef.nativeElement.focus();

      let event = new Event('input');
      this._elementRef.nativeElement.dispatchEvent(event);
      this.textboxClearableChange.emit('');
    });
    this._elementRef.nativeElement.style.paddingRight = '20px';
  }

  ngOnChanges(changes: any): void {
    if (changes.value != undefined) {
      this.valueChanged(changes.value.currentValue);
    }
  }

  valueChanged(value) {
    if ((value != undefined) && value.length > 0) {
      this.showSearchClear();
    } else {
      this.hideSearchClear();
    }
    this._elementRef.nativeElement.value = value;
  }

  hideSearchClear() {
    if (this.searchClear != undefined) {
      this.searchClear.style.display = 'none';
    }
  }

  showSearchClear() {
    if (this.searchClear != undefined) {
      this.searchClear.style.display = 'block';
    }
  }

  @HostListener('focus')
  onFocus() {
    if (this._elementRef.nativeElement.value.length > 0) {
      this.showSearchClear();
    }
  }

  // @HostListener('document:click', ['$event'])
  // onOutside(event) {
  //   var clickedInside = this._elementRef.nativeElement.contains(event.target);
  //   if (!clickedInside) {
  //     this.hideSearchClear();
  //   }
  // }

  @HostListener('keyup')
  onKeyup() {
    if (this._elementRef.nativeElement.value.length > 0) {
      this.showSearchClear();
    } else {
      this.hideSearchClear();
    }
  }
}
