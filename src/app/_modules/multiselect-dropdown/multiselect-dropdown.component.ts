import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges, ElementRef, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DDCustomComponent } from '../dd-custom/dd-custom.component';

@Component({
  selector: 'multiselect-dropdown',
  templateUrl: './multiselect-dropdown.component.html',
  styleUrls: ['./multiselect-dropdown.component.css']
})
export class MultiselectDropdownComponent implements OnInit, OnChanges, AfterViewInit {

  @Input()
  items: any[] = []; // {label: string, value: any}

  @Input('options')
  options: any = {
    textTitleEmpty: 'Please select',
    textTitleAll: 'All',
    textTitleSelected: '[count] selected',
    textCheckboxAll: 'All',
    searchPlaceholder: 'Search...'
  };

  @Input('selected-values')
  selectedValues: any[] = [];

  @Output('select-change')
  change = new EventEmitter<any[]>();

  @ViewChild(DDCustomComponent)
  ddCustom: DDCustomComponent;

  search: string = '';

  currItems: any[] = []; // current items
  prevItems: any[] = []; // previous items

  constructor(private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      if (changes.items.currentValue == undefined) {
        this.items = [];
      }
      this.initItems();
    }
    if (changes.selectedValues) {
      if (changes.selectedValues.currentValue == undefined) {
        this.selectedValues = [];
      }
      this.initSelectedItems();
    }
  }

  ngOnInit() {
  }

  initItems() {
    this.currItems = this.cloneItem(this.items);
    this.prevItems = this.cloneItem(this.items);
  }

  initSelectedItems() {
    for (let i = 0; i < this.items.length; i++) {
      let selected = this.selectedValues.indexOf(this.items[i].value) != -1;
      this.currItems[i].selected = selected;
      this.prevItems[i].selected = selected;
    }
  }

  cloneItem(items) {
    let clone = [];
    for (let item of items) {
      clone.push(Object.assign({}, item));
    }
    return clone;
  }

  onTitleClick() {
    if (this.ddCustom.isVisibleDropdownList()) {
      this.ddCustom.hideDropdownList();
    } else {
      this.ddCustom.showDropdownList();
    }
  }

  onClickOutside() {
    this.ddCustom.hideDropdownList();
  }

  searchFilter(item) {
    if (this.search.length) {
      return item.label.toLowerCase().indexOf(this.search.trim().toLowerCase()) > -1;
    }
    return true;
  }

  onClickOption(index) {
    if (index == 'all') {
      let selected;
      if (this.currItems.length == this.getCountSelected(this.currItems)) {
        selected = false;
      } else {
        selected = true;
      }
      for (let item of this.currItems) {
        item.selected = selected;
      }
    } else {
      let selected = this.currItems[index].selected;
      this.currItems[index].selected = (selected) ? false : true;
    }
  }

  getCountSelected(items) {
    let count = 0;
    for (let item of items) {
      if (item.selected) {
        count++;
      }
    }
    return count;
  }

  getFirstSelectedItem(items) {
    let selectedItems = null;
    for (let item of items) {
      if (item.selected) {
        selectedItems = item;
        break;
      }
    }
    return selectedItems;
  }

  getTitle() {
    let count = this.getCountSelected(this.prevItems);
    if (this.prevItems.length == count) {
      return this.options.textTitleAll;
    } else if (count > 1) {
      return this.options.textTitleSelected.replace('[count]', count.toString());
    } else if (count == 1) {
      return this.getFirstSelectedItem(this.prevItems).label;
    } else {
      return this.options.textTitleEmpty;
    }
  }

  getOkBtnStyle() {
    let menu = this._elementRef.nativeElement.querySelector('.dropdown-menu');
    return {
      'max-height': '280px',
      'overflow': 'auto',
      'display': this.ddCustom.isVisibleDropdownList() ? 'block' : 'none',
      'top': menu.offsetHeight + 18 + 'px',
      'width': menu.offsetWidth + 'px',
      'border-top': '1px solid lightgray'
    };
  }

  onClickOk() {
    this.ddCustom.hideDropdownList();
    if (this.isChanged()) {
      this.prevItems = this.cloneItem(this.currItems);
      this.change.emit(this.prevItems.filter(item => item.selected).map(item => item.value));
    }
  }

  isChanged() {
    for (let i = 0; i < this.prevItems.length; i++) {
      if (this.prevItems[i].selected != this.currItems[i].selected) {
        return true;
      }
    }
    return false;
  }
}
