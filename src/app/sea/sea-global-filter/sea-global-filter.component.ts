import { Component, OnInit, Input } from '@angular/core';
import { GlobalFilterService } from './services/global-filter.service';

@Component({
  selector: 'sea-global-filter',
  templateUrl: './sea-global-filter.component.html',
  styleUrls: ['./sea-global-filter.component.css']
})
export class SeaGlobalFilterComponent implements OnInit {

  constructor(
    private globalFilterService: GlobalFilterService
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.globalFilterService.initSession();
  }

  resetFocusOfGlobalFilter() {
    this.globalFilterService.setFocus(0);
    this.globalFilterService.setActive(false);
    this.globalFilterService.setFilterTemp([]);
    this.globalFilterService.initGlobalFilterObj();
  }

  removeFilterTempOfGlobalFilter(removedItem) {
    this.globalFilterService.setFilterTemp(this.globalFilterService.getFilterTemp().filter(filterItem => filterItem !== removedItem));
    if (this.globalFilterService.getFilterTemp().length == 0 && this.globalFilterService.getFocus() == 0) this.globalFilterService.setActive(false);
    this.globalFilterService.initGlobalFilterObj();
  }

  getFocusOfGlobalFilter() {
    return this.globalFilterService.getFocus();
  }

  customGlobalFilterDialog() {
    this.globalFilterService.customGlobalFilterDialog();
  }

  getFilterTempOfGlobalFilter() {
    return this.globalFilterService.getFilterTemp();
  }

  getFilterTextForBtn(index: number) {
    let filterTemp = this.getFilterTempOfGlobalFilter()[index];
    if (filterTemp[0] === 'Campaign' || filterTemp[0] === 'Label') {
      return filterTemp[0].concat(" : ").concat(filterTemp[1][2]).concat(" ");
    } else {
      return filterTemp.join().replace(/,/g, ' ').concat(" ");
    }
  }

}
