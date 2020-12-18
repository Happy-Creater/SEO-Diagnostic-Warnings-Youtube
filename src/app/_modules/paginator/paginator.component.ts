import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { PaginatorItem } from './paginator-item';

@Component({
  selector: 'paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {
  /**
   * Number of data.
   */
  @Input('nb-of-data')
  nbOfData = [10, 25, 100, 250, 500];
  /**
   * First number of data.
   */
  @Input()
  first: number = 1;
  /**
   * Number row of data.
   */
  @Input()
  row: number = 10;
  /**
   * Total data.
   */
  @Input()
  total: number = 0;
  /**
   * Show row display setting.
   */
  @Input()
  diplayRowSelector: boolean = true;
  /**
   * Last number of data.
   */
  last: number = 0;
  /**
   * All items of dropdown.
   */
  items = [];
  /**
   * Event change of paginator.
   */
  @Output('paginator-change')
  change = new EventEmitter<PaginatorItem>();

  constructor() { }

  ngOnInit() {
    // init all items of dropdown.
    for (let nb of this.nbOfData) {
      this.items.push({ label: nb, value: nb });
    }
    this.updatePaginator();
  }

  ngOnChanges(changes: any): void {
    this.updatePaginator();
  }
  /**
   * Update paginator.
   */
  updatePaginator() {
    this.first = (this.total == 0) ? 0 : (this.first <= 0) || (this.first > this.total) ? 1 : this.first;
    this.last = this.first + this.row - 1;
    this.last = (this.total > 0) ? ((this.last > this.total) ? this.total : this.last) : 0;
  }
  /**
   * Event click previous page.
   */
  previousPage() {
    this.first = this.first - this.row;
    this.updatePaginator();
    this.callChange();
  }
  /**
   * Event click next page.
   */
  nextPage() {
    this.first = this.first + this.row;
    this.updatePaginator();
    this.callChange();
  }
  /**
   * Return true if has previous page.
   */
  hasPrevious(): boolean {
    return this.first > 1;
  }
  /**
   * Return true if has next page.
   */
  hasNext(): boolean {
    return this.last < this.total;
  }
  /**
   * Event change of dropdown.
   */
  onRowChange(value: number) {
    this.row = value;
    this.first = (this.total <= this.row) ? 1 : this.first;
    this.updatePaginator();
    this.callChange();
  }
  /**
   * Event enter go to data.
   */
  goTo(value: string) {
    var intValue = parseInt(value);
    var newFirst = this.first;
    var newFirst = this.first;
    if (this.total > 0) {
      if ((intValue > 0) && (intValue <= this.total)) {
        newFirst = (Math.floor((intValue - 1) / this.row) * this.row) + 1;
      }
    } else {
      newFirst = 1;
    }
    if (newFirst != this.first) {
      this.first = newFirst;
      this.updatePaginator();
      this.callChange();
    }
  }
  /**
   * Call event change.
   */
  callChange() {
    this.change.emit(new PaginatorItem(this.first, this.row));
  }
}
