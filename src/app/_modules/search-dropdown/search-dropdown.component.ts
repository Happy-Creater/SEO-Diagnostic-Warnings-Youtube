import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { DropdownItem } from './dropdown-item';

@Component({
  selector: 'app-search-dropdown',
  templateUrl: './search-dropdown.component.html',
  styleUrls: ['./search-dropdown.component.css']
})
export class SearchDropdownComponent implements OnInit, OnChanges {
  /**
   * All items of dropdown.
   */
  @Input()
  items: DropdownItem[];
  /**
   * The selected value.
   */
  @Input()
  selectedValue: any;
  /**
   * Max height of dropdown.
   */
  @Input('max-height')
  maxHeight: string;
  /**
   * Title bold.
   */
  @Input('title-bold')
  titleBold: boolean = false;
  /**
   * Event change of dropdown.
   */
  @Output()
  change = new EventEmitter<DropdownItem>();
  /**
   * The selected item.
   */
  selectedItem: DropdownItem;
  /**
   * Show all items of dropdown if value is true.
   */
  showItem = false;
  /**
   * Item active.
   */
  itemActive: DropdownItem;
  /**
   * Option Horizontal scroll bar
   */
  @Input('horizontal-bar')
  horizontalBar = false;
  /**
  * Set auto and max height of dropdown.
  */
  @Input('auto-max-height')
  autoMaxHeight: string;

  @Input('right')
  right: string;

  @Input('left')
  left: string;

  /**
   * Set true to disable the dropdown
   */
  @Input('disabled')
  isDisabled: boolean = false;

  /**
   * show glyphicon.
   */
  @Input()
  isShowIcon: boolean = true;

  /**
   * for addding classes to the outer <ul>
   */
  @Input()
  extraClasses: string[] = [];

  /**
   * for replacing the title word <ul>
   */
  @Input()
  replacedWord: any;

  @Input()
  isShowSearch: boolean = true;

  @Input()
  placeholder: string;

  @ViewChild('dropdownMenu')
  dropdownMenu: ElementRef;

  dropdownMenuWidth: number;
  search: string = '';

  constructor() { }

  ngOnInit() {
    this.updateDropdown();
  }

  ngOnChanges(changes: any): void {
    if (changes.items != undefined && changes.selectedValue != undefined) {
      this.updateDropdown();
    } else if (changes.items != undefined) {
      this.selectedValue = undefined;
      this.updateDropdown();
    } else {
      this.updateDropdown();
    }
  }

  /**
   * Update dropdown.
   */
  updateDropdown() {
    if ((this.items != undefined) && (this.items.length > 0) && (this.selectedValue == undefined)) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].selected) {
          this.selectedValue = this.items[i].value;
          break;
        }
      }
    }
    if (this.selectedValue == undefined) {
      if ((this.items != undefined) && (this.items.length > 0)) {
        this.items[0].selected = true;
        this.selectedItem = this.items[0];
        this.selectedValue = this.items[0].value;
      } else {
        this.selectedItem = undefined;
        this.selectedValue = undefined;
      }
    } else {
      this.selectedItem = undefined;
      // finding the selected value.
      for (let item of this.items) {
        if (item.value == this.selectedValue) {
          item.selected = true;
          this.selectedItem = item;
        } else {
          item.selected = false;
        }
      }
      // default first item if the selected value is mismatch.
      if (this.items != undefined) {
        if (this.items.length == 0) {
          this.selectedItem = undefined;
          this.selectedValue = undefined;
        } else if (this.selectedItem == undefined) {
          this.items[0].selected = true;
          this.selectedItem = this.items[0];
          this.selectedValue = this.items[0].value;
        }
      }
    }
  }
  /**
   * Close all items of dropdown.
   */
  closeItem() {
    this.showItem = false;
  }
  /**
   * Event select item of dropdown.
   */
  selectItem(item: DropdownItem) {
    if (this.selectedItem != item) {
      this.selectedItem.selected = false;
      item.selected = true;
      this.selectedItem = item;
      this.selectedValue = item.value;
      this.change.emit(item);
    }
    this.closeItem();
  }
  /**
   * Toggle dropdown.
   */
  toggleDropdown() {
    this.showItem = !this.showItem;
    this.itemActive = this.selectedItem;
    if (((this.maxHeight != undefined) || (this.autoMaxHeight != undefined)) && (window.navigator.userAgent.indexOf('Firefox') >= 0)) {
      setTimeout(() => {
        if (this.dropdownMenuWidth == undefined) {
          this.dropdownMenuWidth = (this.dropdownMenu.nativeElement.offsetWidth + 15);
        }
        this.dropdownMenu.nativeElement.style.width = (this.dropdownMenuWidth + 'px');
      }, 0);
    }
  }
  /**
   * Set style of height of dropdown.
   */
  setStyleHeightDropdown() {
    let styles = {
      'height': this.maxHeight ? this.maxHeight : 'auto',
      'overflow-y': this.maxHeight ? 'auto' : 'none',
      'overflow-x': this.horizontalBar ? 'auto' : 'hidden',
      'max-height': this.autoMaxHeight ? this.autoMaxHeight : 'auto',
      'right': this.right ? this.right : 'auto',
      'left': this.left ? this.left : 'auto'
    }

    return styles;
  }
  /**
   * Disabled item of dropdown.
   * @param value value of dropdown
   */
  disabled(value) {
    for (let item of this.items) {
      if (item.value == value) {
        if (item.selected) {
          item.selected = false;
          let activeItems = this.items.filter(i => !i.disabled);
          if (activeItems.length > 0) {
            activeItems[0].selected = true;
            this.selectedItem = activeItems[0];
            this.selectedValue = activeItems[0].value;
          } else {
            this.selectedItem = undefined;
            this.selectedValue = undefined;
          }
        }
        item.disabled = true;
        break;
      }
    }
  }
  /**
   * Enabled item of dropdown.
   * @param value value of dropdown
   */
  enabled(value) {
    for (let item of this.items) {
      if (item.value == value) {
        item.disabled = false;
      }
    }
  }
  /**
   * Event mouse over item of dropdown.
   * @param item item of dropdown
   */
  onItemMouseOver(item) {
    this.itemActive = item;
  }

  getSearchFilter(item: any[]) {
    let result = [];
    if (this.search.length) {
      result = item.filter(obj => {
        return obj.label.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      });
    } else {
      return item;
    }
    return result;
  }

  replaceLabel(label: string) {
    if (this.replacedWord != undefined) {
      return label.replace(this.replacedWord.word, this.replacedWord.newword);
    }
    return label;
  }

  /**
 * Set style of search block.
 */
  setDisplaySearchBlock() {
    return {
      'display': this.isShowSearch ? 'block' : 'none'
    };
  }

  trackByFn(index, item) {
    return index;
  }

}