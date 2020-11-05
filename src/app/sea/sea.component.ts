import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { InitializeService } from '../_services/initialize/initialize.service';
import { GlobalDateService } from '../_services/global_date/global-date.service';
import { SeaCalendarService } from './_services/sea-calendar.service';

const moment: any = require('moment');

const SEA: string = 'sea';

@Component({
  selector: 'app-sea',
  templateUrl: './sea.component.html',
  styleUrls: ['./sea.component.css']
})
export class SeaComponent implements OnInit, OnDestroy {

  dateListener: Subscription;

  constructor(private router: Router, private init: InitializeService, private activeRoute: ActivatedRoute, private globalDate: GlobalDateService, private calendarService: SeaCalendarService) { }

  ngOnInit() {
    this.init.initUserWebsiteByParam(null, this.activeRoute);

    this.globalDate.getDateChange().first().subscribe(dateItem => {
      let calendar = this.calendarService.getCalendar();
      let initial = this.calendarService.isInitial();
      let currentModule = 'sea';
      if (calendar == undefined) {
        calendar = {};
        calendar.start = moment(dateItem.start).format('DD/MM/YYYY');
        calendar.end = moment(dateItem.end).format('DD/MM/YYYY');
        calendar.selectedRange = this.globalDate.getSelectedRangeByModule(currentModule);
        this.calendarService.setCalendar(calendar, initial);
      } else if ((calendar.start != moment(dateItem.start).format('DD/MM/YYYY')) || (calendar.end != moment(dateItem.end).format('DD/MM/YYYY'))) {
        let isFirstDateInit = true;
        let isWebsiteChanged = false;
        let start = new Date(moment(calendar.start, 'DD/MM/YYYY'));
        let end = new Date(moment(calendar.end, 'DD/MM/YYYY'));

        let daterange = this.globalDate.getGlobalDate();
        daterange.start = start;
        daterange.end = end;

        this.globalDate.setGlobalDate(daterange, currentModule, isWebsiteChanged, isFirstDateInit);
      }
    });

    this.dateListener = this.globalDate.getDateChange().skip(1).subscribe(dateItem => {
      let calendar = this.calendarService.getCalendar();
      let initial = this.calendarService.isInitial();

      initial = (calendar.start == moment(dateItem.start).format('DD/MM/YYYY')) && (calendar.end == moment(dateItem.end).format('DD/MM/YYYY'));

      calendar.start = moment(dateItem.start).format('DD/MM/YYYY');
      calendar.end = moment(dateItem.end).format('DD/MM/YYYY');
      calendar.selectedRange = this.globalDate.getSelectedRangeByModule('sea');
      this.calendarService.setCalendar(calendar, initial);
    });
  }

  ngOnDestroy(): void {
    this.dateListener.unsubscribe();
  }
}
