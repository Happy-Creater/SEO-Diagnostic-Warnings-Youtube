import { Directive, ElementRef, Renderer, OnInit, HostListener, Input } from '@angular/core';

import { SortService } from '../../services/sort/sort.service';

@Directive({
  selector: '[sort-header]'
})
export class SortHeaderDirective implements OnInit {
  /**
   * Sort header.
   */
  @Input('sort-header')
  sortHeader: string;
  /**
   * Sort header column.
   */
  sortCol: string;
  /**
   * Sort type.
   */
  sortType: string;
  /**
   * Element icon.
   */
  spanIcon: any;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private _service: SortService) { }

  ngOnInit() {
    if (this.sortHeader) {
      // init cursor pointer.
      this._elementRef.nativeElement.style.cursor = 'pointer';
    }

    // binding set sortCol and sortType.
    this._service.getSort().subscribe(value => {
      this.sortCol = value.sortCol;
      this.sortType = value.sortType;
      this.updateSortHeader();
    });
  }

  updateSortHeader() {
    if ((this.sortHeader != undefined) && (this.sortCol != undefined) && (this.sortHeader == this.sortCol)) {
      if (this.spanIcon) { // remove previous element icon.
        this.spanIcon.remove();
      }
      // create element icon.
      this.spanIcon = this._renderer.createElement(this._elementRef.nativeElement, 'span');
      let classSort = 'glyphicon-menu-up';
      if (this.sortType == 'desc') {
        classSort = 'glyphicon-menu-down';
      }
      this._renderer.setElementAttribute(this.spanIcon, 'class', 'glyphicon ' + classSort);
    } else { // remove element icon.
      if (this.spanIcon) {
        this.spanIcon.remove();
        this.spanIcon = undefined;
      }
    }
  }

  @HostListener('click')
  onClick() {
    // set sort column.
    this._service.setSortCol(this.sortHeader);
  }
}
