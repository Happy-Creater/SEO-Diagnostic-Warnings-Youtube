import { Component, OnInit, OnChanges, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { DDCustomComponent } from "app/_modules/dd-custom/dd-custom.component";
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-multiselect-dropdown',
  templateUrl: './app-multiselect-dropdown.component.html',
  styleUrls: ['./app-multiselect-dropdown.component.css']
})
export class AppMultiselectDropdownComponent implements OnInit {

  // Dropdown Title
  @Input() fixedTitle: string;

  // Option-object = {label: 'LABEL', value: 'VALUE'}
  @Input() ddOptions: Array<Object>;

  // The value is the same as value in Option-object
  @Input() initialSelectedValues: Array<string> = [];

  // maximum number of options that can be selected
  @Input() maxSelect: number;

  @Input() placeholder: string;

  @Input() type: number; // 1 = campaign, 2 = ad-group

  @Input() classDropdown: string = "menu-n-tabs";

  @Output() onChange: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  @ViewChild(DDCustomComponent) ddCustom: DDCustomComponent;

  @Input() isEnableClickOption: boolean = true;

  @Input() isLeftStyleSetting: boolean = true;

  @Input() offSetTop: number = 0;

  menu;

  selectedItems: Array<string>;
  selectedItemsTemp: Array<string>;
  search: string = '';
  websiteSubscription: Subscription;

  constructor(
    private global: GlobalVariableService,
    private _elementRef: ElementRef
  ) {
  }

  ngOnInit() {
    this.selectedItems = this.ddOptions
      .filter(option => this.initialSelectedValues.indexOf(option['value']) > -1)
      .map(option => option['value']);

    this.selectedItemsTemp = this.selectedItems.slice();
  }

  ngAfterViewInit() {
    this.websiteSubscription = this.global.getWebsiteChange().subscribe(website => {
      this.ngOnInit();
    });
  }

  ngOnDestroy(): void {
    this.websiteSubscription.unsubscribe();
  }

  ngOnChanges(changes) {
    this.selectedItems = this.ddOptions
      .filter(option => this.initialSelectedValues.indexOf(option['value']) > -1)
      .map(option => option['value']);

    this.selectedItemsTemp = this.selectedItems.slice();
  }

  onClickOption(optionValue: string) {
    if (this.isSelected(optionValue)) {
      this._deselect(optionValue);
    } else {
      if (this.maxSelect === undefined || (this.selectedItemsTemp.length < this.maxSelect)) {
        this._select(optionValue);
      }
    }
  }

  onToggle() {
    if (this.ddCustom.isVisibleDropdownList()) {
      this.ddCustom.hideDropdownList();
      // this._confirm();
    } else {
      this.ddCustom.showDropdownList();
      this.menu = this._elementRef.nativeElement.querySelector('.dropdown-menu').offsetWidth;
      if (window.navigator.userAgent.indexOf('Firefox') >= 0) {
        let menu = this._elementRef.nativeElement.querySelector('.dropdown-menu');
        if (!menu.style.width) {
          menu.style.width = menu.offsetWidth + 15 + 'px';
        }
      }
    }
  }

  getUlStyle() {
    return {
      'left': this.isLeftStyleSetting ? `-${(this.menu ? Number(this.menu) : 0) - 88}px` : 'unset',
      'max-height': '280px',
      'overflow': 'auto'
    }
  }

  getOkBtnStyle() {
    let top = (window.innerWidth <= 980 ? 27 : 30) - this.offSetTop;
    let menu = this._elementRef.nativeElement.querySelector('.dropdown-menu');
    return {
      'left': this.isLeftStyleSetting ? `-${(this.menu ? Number(this.menu) : 0) - 88}px` : 'unset',
      'max-height': '280px',
      'overflow': 'auto',
      'display': this.ddCustom.isVisibleDropdownList() ? 'block' : 'none',
      'top': menu.offsetHeight + top + 'px',
      // 'width': menu.offsetHeight == 280 ? menu.offsetWidth + 'px' : menu.offsetWidth - 1 + 'px',
      'width': menu.offsetWidth + 'px',
      'border-top': '1px solid lightgray'
    }
  }

  onClickOutside() {
    // if (this.ddCustom.isVisibleDropdownList()) {
    this.ddCustom.hideDropdownList();

    //   this._confirm();

    // }
  }

  onClickOk() {
    if (this.ddCustom.isVisibleDropdownList()) {
      this.ddCustom.hideDropdownList();

      this._confirm();

    }
  }

  isSelected(value: string): boolean {
    if (value == 'all') {
      return this.selectedItemsTemp.length == this.ddOptions.map(option => option['value']).length;
    }
    return this.selectedItemsTemp.indexOf(value) > -1
  }

  public _select(value: string): void {
    if (value == 'all') {
      this.selectedItemsTemp = this.ddOptions.map(option => option['value']);
    } else {
      this.selectedItemsTemp.push(value);
    }
  }

  private _deselect(value: string): void {
    if (value == 'all') {
      this.selectedItemsTemp = [];
    } else {
      this.selectedItemsTemp.splice(this.selectedItemsTemp.indexOf(value), 1);
    }
  }

  public _confirm(): void {
    // if (this._isChanged()) {
    this.selectedItems = this.ddOptions
      .filter(option => this.selectedItemsTemp.indexOf(option['value']) > -1)
      .map(option => option['value']);
    this.selectedItemsTemp = this.selectedItems.slice();
    this.onChange.emit(this.selectedItems.slice());
    // }
  }

  private _isChanged(): boolean {
    let isChanged: boolean = false;
    if (this.selectedItems.length === this.selectedItemsTemp.length) {
      for (let i = 0; i < this.selectedItems.length; i++) {
        let item = this.selectedItems[i];
        if (this.selectedItemsTemp.indexOf(item) === -1) {
          isChanged = true;
          break;
        }
      }
    } else {
      isChanged = true;
    }
    return isChanged;
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

}
