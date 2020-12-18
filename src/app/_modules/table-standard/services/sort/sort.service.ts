import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SortService {
  /**
   * Sort.
   */
  private sort = new BehaviorSubject<any>({});
  /**
   * Sort column.
   */
  private sortCol = new Subject<string>();

  constructor() { }
  /**
   * Returns sort.
   */
  getSort() {
    return this.sort;
  }
  /**
   * Set sort.
   * @param sort sort to set.
   */
  setSort(sort: any) {
    this.sort.next(sort);
  }
  /**
   * Returns sort column.
   */
  getSortCol() {
    return this.sortCol;
  }
  /**
   * Set sort column.
   * @param sortCol sort column to set.
   */
  setSortCol(sortCol: string) {
    this.sortCol.next(sortCol);
  }
}
