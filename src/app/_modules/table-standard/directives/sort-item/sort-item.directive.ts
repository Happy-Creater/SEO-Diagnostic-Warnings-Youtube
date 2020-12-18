import { Directive, ElementRef, Renderer, OnInit, Input, OnDestroy } from '@angular/core';

import { SortService } from '../../services/sort/sort.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[sort-item]'
})
export class SortItemDirective implements OnInit, OnDestroy {
  /**
   * Sort item.
   */
  @Input('sort-item')
  sortItem: string;
  /**
   * Sort item column.
   */
  sortCol: string;
  /**
   * Sort item index.
   */
  @Input('sort-item-index')
  index: number;

  listener: Subscription;

  constructor(private _elementRef: ElementRef, private _renderer: Renderer, private _service: SortService) { }

  ngOnInit() {
    // binding set sortCol.
    this.listener = this._service.getSort().subscribe(value => {
      this.sortCol = value.sortCol;
      this.updateSortItem();
    });
  }

  ngOnDestroy(): void {
    this.listener.unsubscribe();
  }
  /**
   * Update sort item.
   */
  updateSortItem() {
    // set class of element.
    if ((this.sortItem != undefined) && (this.sortCol != undefined) && (this.sortItem == this.sortCol)) {
      if ((this.index % 2) == 0) {
        this._renderer.setElementClass(this._elementRef.nativeElement, 'sort-2n1', true);
      } else {
        this._renderer.setElementClass(this._elementRef.nativeElement, 'sort-2n', true);
      }
    } else {
      this._renderer.setElementClass(this._elementRef.nativeElement, 'sort-2n1', false);
      this._renderer.setElementClass(this._elementRef.nativeElement, 'sort-2n', false);
    }
  }
}
