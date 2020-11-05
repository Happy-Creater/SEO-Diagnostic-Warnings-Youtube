import { AfterViewInit, Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { InitializeService } from '../_services/initialize/initialize.service';
import { LogsService } from './logs.service';
import { GlobalVariableService } from '../_services/global_variable/global-variable.service';
import { GlobalDateService } from 'app/_services/global_date/global-date.service';

const moment: any = require('moment');
const SELECTED_PERIOD_ID = 'logsSelectedPeriodId';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [LogsService]
})
export class LogsComponent implements OnInit, AfterViewInit, OnDestroy {

  isReady = false;

  routerSubscription;
  websiteSubscription;
  dateSubscription;

  logsPeriodSelected = null;
  itemSelectPeriodOption = {};
  idSelectPeriod = [];

  deactiveMenuCustomPeriod = false;

  isHasScanInPeriod = false;

  constructor(private router: Router,
    private init: InitializeService,
    private activeRoute: ActivatedRoute,
    private service: LogsService,
    private globalVariable: GlobalVariableService,
    private globalDate: GlobalDateService,
    private ngZone: NgZone) {
    window['appLogsComponent'] = { component: this, zone: ngZone };
  }

  ngOnInit() {
    this.init.initUserWebsiteByParam(null, this.activeRoute);
  }

  ngAfterViewInit() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        try {
          this.setDateToCalendar(this.itemSelectPeriodOption[this.logsPeriodSelected].minDate, this.itemSelectPeriodOption[this.logsPeriodSelected].maxDate, false);
        } catch (e) { }
      }
    });
    this.getPeriodSelectedFromStorage();
    this.websiteSubscription = this.globalVariable.getWebsiteChange().subscribe(websiteItem => {
      if (this.isReady) {
        this.logsPeriodSelected = null;
        this.savePeriodSelected(null);
      }
      this.isReady = false;
      this.setCalendarDate();
    });
    this.dateSubscription = this.globalDate.dateChange.subscribe(date => {
      try {
        this.deactiveMenuCustomPeriod
          = this.itemSelectPeriodOption[this.logsPeriodSelected].minDate !== moment(date.start).format('YYYY-MM-DD')
          || this.itemSelectPeriodOption[this.logsPeriodSelected].maxDate !== moment(date.end).format('YYYY-MM-DD');
      } catch (e) { }
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.websiteSubscription.unsubscribe();
    this.dateSubscription.unsubscribe();
  }

  getPeriodSelectedFromStorage() {
    this.logsPeriodSelected = window.sessionStorage.getItem(SELECTED_PERIOD_ID);
  }

  savePeriodSelected(id) {
    window.sessionStorage.setItem(SELECTED_PERIOD_ID, id);
  }

  setCalendarDate() {
    this.idSelectPeriod = [];
    setTimeout(() => {
      if (window['appGlobalComponentRef'].component.completeGetScanDate) {
        this.service.getAllPeriod().subscribe(res => {
          if (res.status === 'ok') {
            const result = res.result;
            this.itemSelectPeriodOption = result;
            for (const id of Object.keys(this.itemSelectPeriodOption)) {
              const item = this.itemSelectPeriodOption[id];
              const dMin = item['minDate'].split('-');
              const dMax = item['maxDate'].split('-');
              const dateMin = dMin[2] + '/' + dMin[1] + '/' + dMin[0];
              const dateMax = dMax[2] + '/' + dMax[1] + '/' + dMax[0];
              item['minDateShow'] = dateMin;
              item['maxDateShow'] = dateMax;
              this.idSelectPeriod.push(id);
            }
            this.idSelectPeriod.reverse();
            if (isNaN(parseInt(this.logsPeriodSelected, 10)) || !this.itemSelectPeriodOption[this.logsPeriodSelected]) {
              this.logsPeriodSelected = this.idSelectPeriod[0];
            }
            this.setDateToCalendar(this.itemSelectPeriodOption[this.logsPeriodSelected].minDate, this.itemSelectPeriodOption[this.logsPeriodSelected].maxDate, true);
            this.isReady = true;
          }
        }, err => {
          console.error(err);
        });
      } else {
        this.setCalendarDate();
      }
    }, 100);
  }

  onLogsSelectPeriodChange(selectedId) {
    this.isHasScanInPeriod = false;
    try {
      if (selectedId.indexOf(':') !== -1) {
        selectedId = selectedId.split(':')[1];
        selectedId = parseInt(selectedId, 10);
      }
    } catch (e) { }
    this.logsPeriodSelected = selectedId;
    this.savePeriodSelected(selectedId);
    this.setDateToCalendar(this.itemSelectPeriodOption[this.logsPeriodSelected].minDate, this.itemSelectPeriodOption[this.logsPeriodSelected].maxDate, true);
  }

  setDateToCalendar(minDate, maxDate, doChange = false) {
    window['appGlobalComponentRef'].zone.run(() => {
      const fn = window['appGlobalComponentRef'].component;
      const toShowCalendar = ['logs-global-analysis', 'logs-instant-webpagesearch'];
      const currentRoute = this.router.url.split('/').pop();
      let showCalendar = false;
      if (toShowCalendar.indexOf(currentRoute) > -1) {
        showCalendar = true;
      }
      fn.calendarLogsMonthOfLastDate(minDate, maxDate, showCalendar, doChange);
      // fn.validateDateScanningWebsite(this.globalVariable.getActiveAccount(), this.globalVariable.getWebId(), this.globalVariable.url);
      this.hasScanInPeriod(minDate, maxDate);
    });
  }

  hasScanInPeriod(minDate, maxDate) {
    this.service.hasScanInPeriod(minDate, maxDate).subscribe(res => {
      if (res.status === 'ok') {
        this.isHasScanInPeriod = res.result;
        if (!this.isHasScanInPeriod) {
          const url = this.router.url;
          if (url.endsWith('diagnostic-low-crawled-pages')
            || url.endsWith('logs-cross-analysis')) {
            this.router.navigate([
              url.replace(RegExp('(/[^/]+).*'), '$1'),
              btoa(this.globalVariable.getActiveAccount()),
              this.globalVariable.getWebId(),
              'logs-global-analysis']);
          }
        }
      }
    }, err => {
      console.error(err);
    });
  }

}
