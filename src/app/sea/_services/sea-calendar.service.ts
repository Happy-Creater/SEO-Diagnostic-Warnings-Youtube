import { Injectable } from '@angular/core';
import { SessionStorageHandler } from '../../_inherit/session-storage-handler';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const SEA: string = 'sea';

@Injectable()
export class SeaCalendarService extends SessionStorageHandler {

  initial: boolean;
  calendar: any;
  seaCalendarObj: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
    super();
  }

  initSession() {
    let sessionStorage = this.getSessionItem(SEA);
    if (sessionStorage == undefined) {
      this.initial = true;
    } else {
      let session = JSON.parse(sessionStorage);
      this.calendar = session.calendar;
      this.initial = session.initial;
    }
  }

  saveSession() {
    let session = {
      initial: this.initial,
      calendar: this.calendar
    };
    this.setSessionItem(SEA, JSON.stringify(session));
  }

  getCalendar() {
    return this.calendar;
  }

  setCalendar(calendar: any, initial: boolean) {
    this.calendar = calendar;
    this.initial = initial;
    this.saveSession();
    this.initCalendarObj();
  }

  clearCalendar() {
    this.removeSessionItem(SEA);
    this.calendar = undefined;
    this.initial = true;
    this.initCalendarObj();
  }

  isInitial() {
    return this.initial;
  }

  initCalendarObj() {
    this.seaCalendarObj.next({ startDate: this.calendar.start, endDate: this.calendar.end, selectedRange: this.calendar.selectedRange });
  }

}
