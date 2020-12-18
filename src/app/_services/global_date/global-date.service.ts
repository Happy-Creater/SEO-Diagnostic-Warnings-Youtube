import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GlobalDateItem } from './global-date-object';
import { Observable } from 'rxjs/Rx';

const moment: any = require('moment');

const GLOBAL_DATE_KEY = 'global_date';

@Injectable()
export class GlobalDateService {

  public dateChange = this.getDateChange();

  public range = {
    customRange: -1,
    threePreviousMonths: 0,
    sixPreviousMonths: 1,
    previousScan: 2,
    beginProject: 3,
    previousMonth: 4,
    previousYear: 5
  };

  public seaRange = {
    lastMonth: 0,
    last30Days: 1,
    lastThreeMonths: 2,
    lastSixMonths: 3
  };

  public globalDateChange: BehaviorSubject<GlobalDateItem> = new BehaviorSubject(null);

  private currentModule;
  private lastSelectedRange;
  private isWebsiteChanged;

  constructor() {
  }

  getDateFormated(d: Date) {
    return moment(d).format('YYYY-MM-DD');
  }

  setGlobalDate(dateObj: GlobalDateItem, currentModule: string, isWebsiteChanged: boolean, isFirst = false) {
    this.isWebsiteChanged = isWebsiteChanged;
    let isDateChanged = true;
    try { isDateChanged = JSON.stringify(this.getGlobalDateByModule(currentModule)) != JSON.stringify(dateObj); } catch (e) { }
    if (isDateChanged || isFirst || this.lastSelectedRange != this.getSelectedRange()) {
      this.lastSelectedRange = this.getSelectedRange();
      window.sessionStorage.setItem(GLOBAL_DATE_KEY + '_' + currentModule, JSON.stringify(dateObj));
      this.globalDateChange.next(dateObj);
    }
  }

  getGlobalDate(): GlobalDateItem {
    return this.globalDateChange.value;
  }

  getFormatedGlobalDate(): { start: string, end: string, startCompareTo: string, endCompareTo: string } {
    return {
      start: this.getDateFormated(this.globalDateChange.value.start),
      end: this.getDateFormated(this.globalDateChange.value.end),
      startCompareTo: this.globalDateChange.value.startCompareTo ?
        this.getDateFormated(this.globalDateChange.value.startCompareTo) : undefined,
      endCompareTo: this.globalDateChange.value.endCompareTo ?
        this.getDateFormated(this.globalDateChange.value.endCompareTo) : undefined
    };
  }

  getGlobalDateByModule(currentModule: string): GlobalDateItem {
    const obj = window.sessionStorage.getItem(GLOBAL_DATE_KEY + '_' + currentModule);
    return obj == null ? null : JSON.parse(obj);
  }

  getIsSelectedPreviousScan(currentModule: string): boolean {
    const selectedState = window.sessionStorage.getItem(GLOBAL_DATE_KEY + '_' + currentModule + '_selected_range');
    return selectedState == null ? null : (selectedState == this.range.previousScan.toString());
  }

  getSelectedRange(): number {
    const selectedRange = window.sessionStorage.getItem(GLOBAL_DATE_KEY + '_' + this.currentModule + '_selected_range');
    return selectedRange == null ? this.range.customRange : Number(selectedRange);
  }

  getSelectedRangeKey(): any {
    if (this.currentModule == 'sea') {
      return Object.keys(this.seaRange).find(key => this.seaRange[key] === Number(this.getSelectedRange()));
    }
    return Object.keys(this.range).find(key => this.range[key] === Number(this.getSelectedRange()));
  }

  getSelectedRangeByModule(currentModule: string): number {
    const selectedRange = window.sessionStorage.getItem(GLOBAL_DATE_KEY + '_' + currentModule + '_selected_range');
    return selectedRange == null ? this.range.customRange : Number(selectedRange);
  }

  setSelectedRange(state: number, currentModule: string) {
    window.sessionStorage.setItem(GLOBAL_DATE_KEY + '_' + currentModule + '_selected_range', state.toString());
  }

  setCurrentModule(currentModule: string) {
    this.currentModule = currentModule;
  }

  getDateChange(): Observable<GlobalDateItem> {
    return Observable.create(observer => {
      this.globalDateChange.subscribe(dateObj => {
        if (dateObj != null && !this.isWebsiteChanged) {
          observer.next(dateObj);
        }
      });
    });
  }

}
