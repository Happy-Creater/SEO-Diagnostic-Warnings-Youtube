import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { TableStandardItem } from './table-standard-item';
import { SortService } from './services/sort/sort.service'

@Component({
  selector: 'table-standard',
  templateUrl: './table-standard.component.html',
  styleUrls: ['./table-standard.component.css'],
  providers: [SortService]
})
export class TableStandardComponent implements OnInit, OnChanges {
  /**
   * Number of data.
   */
  @Input('nb-of-data')
  nbOfData = [10, 25, 50, 100, 250, 500, 1000, 2500, 5000];
  /**
   * First number of data.
   */
  @Input()
  first: number = 0;
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
   * Sort column.
   */
  @Input()
  sortCol: string;
  /**
   * Sort type.
   */
  @Input()
  sortType: string = 'asc';
  /**
   * Default sort type.
   */
  @Input()
  defaultSortType: string = 'desc';
  /**
   * Disabled paginator.
   */
  @Input('disabled-paginator')
  disabledPaginator: boolean = false;
  /**
   * Event change of table standard.
   */
  @Output('table-standard-change')
  change = new EventEmitter<TableStandardItem>();

  constructor(private _service: SortService) { }

  ngOnInit() {
    this._service.setSort({ sortCol: this.sortCol, sortType: this.sortType });
    this._service.getSortCol().subscribe(value => {
      if (this.sortCol == value) {
        if (this.sortType == 'asc') {
          this.sortType = 'desc';
        } else {
          this.sortType = 'asc';
        }
      } else {
        this.sortType = this.defaultSortType;
      }
      this.sortCol = value;
      this._service.setSort({ sortCol: this.sortCol, sortType: this.sortType });
      this.callChange('sort');
    });
  }

  ngOnChanges(changes: any): void {
    if ((changes.first != undefined) || (this.first == 0)) {
      this.first += 1;
    }
    this._service.setSort({ sortCol: this.sortCol, sortType: this.sortType });
  }
  /**
   * Event change of paginator.
   * @param paginatorItem item of paginator 
   */
  onPaginatorChange(paginatorItem: any) {
    this.first = paginatorItem.first;
    this.row = paginatorItem.row;
    this.callChange();
  }

  /**
   * Event click of sort header.
   * @param sortCol sort column.
   */
  onSortHeaderClick(sortCol: string) {
    if (this.sortCol == sortCol) {
      if (this.sortType == 'asc') {
        this.sortType = 'desc';
      } else {
        this.sortType = 'asc';
      }
    } else {
      this.sortType = this.defaultSortType;
    }
    this.sortCol = sortCol;
    this.callChange('sort');
  }
  /**
   * Call event change of table standard. ("first - 1" is index)
   */
  callChange(event: string = '') {
    this.change.emit(new TableStandardItem(this.first - 1, this.row, this.sortCol, this.sortType, event));
  }

  forceSortType(sortType){
    this.sortType = sortType;
    this._service.setSort({ sortCol: this.sortCol, sortType: this.sortType });
  }
}
