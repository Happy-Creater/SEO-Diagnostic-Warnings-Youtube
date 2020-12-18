import { Component, OnInit, Input, Output, ContentChild, EventEmitter } from '@angular/core';

import { DDTitleDirective } from './directives/dd-title/dd-title.directive';
import { DDListDirective } from './directives/dd-list/dd-list.directive';
import { DDListHeaderDirective } from './directives/dd-list-header/dd-list-header.directive';

@Component({
  selector: 'dd-custom',
  templateUrl: './dd-custom.component.html',
  styleUrls: ['./dd-custom.component.css']
})
export class DDCustomComponent implements OnInit {
  /**
   * Dropdown title.
   */
  @ContentChild(DDTitleDirective)
  ddTitle: DDTitleDirective;
  /**
   * Dropdown list.
   */
  @ContentChild(DDListDirective)
  ddList: DDListDirective;
  /**
   * Drop down list header.
   */
  @ContentChild(DDListHeaderDirective)
  ddListHeader: DDListHeaderDirective;
  @Input('class-dropdown')
  classDropdown: string = 'menu-n-tabs';
  /**
   * Event click of dropdown title.
   */
  @Output('title-click')
  onTitleClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    if (this.ddTitle) {
      // binding dropdown title listener.
      this.ddTitle.getTitleListener().subscribe((event) => {
        this.onTitleClick.emit(event);
      });
    }
    if (this.ddListHeader) {
      // binding dismiss listener.
      this.ddListHeader.getDismissListener().subscribe(() => {
        this.hideDropdownList();
      });
    }
  }
  /**
   * Show dropdown list.
   */
  showDropdownList() {
    this.ddList.show();
  }
  /**
   * Hide dropdown list.
   */
  hideDropdownList() {
    this.ddList.hide();
  }
  /**
   * Returns true if dropdown list is visible.
   */
  isVisibleDropdownList() {
    return this.ddList.isVisible();
  }
}
