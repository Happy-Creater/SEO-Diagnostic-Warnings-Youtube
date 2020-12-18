import { Component, OnInit, Input, EventEmitter, Output, ElementRef } from '@angular/core';

@Component({
  selector: 'bs-dropdown',
  templateUrl: './bs-dropdown.component.html',
  styleUrls: ['./bs-dropdown.component.css']
})
export class BsDropdownComponent implements OnInit {

  @Input()
  selectedValue: any;

  @Input()
  options: { label: string, value: any }[] = [];

  @Input()
  defaultTitle: string = '';

  @Input()
  disabled: boolean = false;

  @Input()
  maxHeight: number;

  @Input('no-border')
  noBorder: boolean = false;

  @Output()
  change = new EventEmitter<any>();

  showItem = false;

  constructor(private _elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    /**
     * to prevent the problem that firefox construct the scroll bar inside the element when it has overflow-y = 'auto',
     * instead, we use overflow-y = 'scroll' conditionally 
     */
    let innerDDList = this._elementRef.nativeElement.querySelector('#inner-ddlist');
    if (innerDDList) {
      if (innerDDList.scrollHeight > innerDDList.offsetHeight) {
        innerDDList.style.overflowY = 'scroll';
      } else {
        innerDDList.style.overflowY = 'auto';
      }
    }
  }

  toggleDropdown() {
    this.showItem = !this.showItem;
  }

  closeItemList() {
    this.showItem = false;
  }

  findSelectedLabel() {
    let selectedOptions = this.options.filter(option => option.value === this.selectedValue)[0];
    return selectedOptions ? selectedOptions.label : this.defaultTitle;
  }

  select(optionValue) {
    if (this.selectedValue !== optionValue) {
      this.selectedValue = optionValue;
      this.change.emit(optionValue);
    }
    this.closeItemList();
  }

}
