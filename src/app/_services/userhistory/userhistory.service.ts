import { Injectable, HostListener } from '@angular/core';
import { GlobalVariableService } from '../global_variable/global-variable.service'
import * as uuid from 'uuid';
import * as moment from 'moment/moment';
import { Router, NavigationEnd, NavigationStart, CanDeactivate } from '@angular/router';
import { SessionStorageHandler } from 'app/_inherit/session-storage-handler';
import * as config from '../../config/config';
import { environment } from 'environments/environment';
import { RequestService } from "app/_services/request/request.service";
@Injectable()
export class UserhistoryService extends SessionStorageHandler {


  constructor(
    private globalVariableService: GlobalVariableService,
    private router: Router,
    private request: RequestService
  ) { super() }
  duration = 0;
  datetimeformat = "DD/MMM/YYYY HH:mm:ss";
  intervalProgress = null;
  page = "";
  dataforlog = [];
  olddataforlog = [];
  databeforeclosetab;
  lastuuid = "";
  start() {
    this.closetabEvent();
    let uuids = uuid.v4();
    var today = new Date();
    let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
    let urls;
    this.globalVariableService.getWebsiteItem().subscribe(res => {
      urls = res.url;
      let data = {
        uuid: uuids,
        user: this.globalVariableService.getUsername(),
        user_type: this.globalVariableService.getUserRole(),
        datetimelogin: dateTime,
        datetimelogout: '',
        page: '',
        oldpage: '',
        datetimeinpage: dateTime,
        web: urls,
        oldweb: '',
        account: res.account,
        usertime: 0,
        pagetime: 0,
        environmenttype: environment.MONETORING_TYPE
      };
      this.dataforlog.push(data);
      this.sendtobg();
    });
    return uuids;
  }
  update(uuid, page) {
    this.databeforeclosetab = page;
    this.lastuuid = uuid;
    this.dataforlog.forEach(element => {
      if (element.uuid === uuid) {
        if (element.page === "") {
          element.page = page.urlAfterRedirects;
          element.web = this.globalVariableService.getUrl();
          var today = new Date();
          let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
          element.datetimeinpage = dateTime;
        } else if (page === "updateweb") {
          element.web = this.globalVariableService.getUrl();
          element.account = this.globalVariableService.getActiveAccount();
        }
        else {
          if (element.page != page.url) {
            element.page = page.urlAfterRedirects;
            element.web = this.globalVariableService.getUrl();
            element.account = this.globalVariableService.getActiveAccount();
            let oldday = new Date(element.datetimeinpage);
            var today = new Date();
            element.pagetime = (today.getTime() - oldday.getTime()) / 1000;
            let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
            element.datetimeinpage = dateTime;
          }
        }
      }
    });
    this.sendtobg();


  }
  logout() {
    var today = new Date();
    let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
    this.dataforlog.forEach(element => {
      element.datetimelogout = dateTime;
    });
    this.dataforlog.forEach(element => {
      let oldday = new Date(element.datetimeinpage);
      var today = new Date();
      element.pagetime = (today.getTime() - oldday.getTime()) / 1000;
      let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
      element.datetimeinpage = dateTime;
    });
      this.writethelog('logout').subscribe(res => {
        if (res.status === 'ok') {
          for (let i = 0; i < this.dataforlog.length; i++) {
            let index = 0;
            this.olddataforlog.forEach(res => {
              if (res.uuid === this.dataforlog[index].uuid) {
                this.olddataforlog.slice(index, 1);
              }
              index += 1;
            });
            this.dataforlog.slice(i, 1);
          }
          this.saveSession();
        }
      });
  }
  closetab() {
    var today = new Date();
    let dateTime = moment(today, this.datetimeformat, true).format(this.datetimeformat);
    this.dataforlog.forEach(element => {
      element.datetimelogout = dateTime;
    });
    clearInterval(this.intervalProgress);
    this.writethelog('closetab').subscribe(res => {
      if (res.status === 'ok') {
        for (let i = 0; i < this.dataforlog.length; i++) {
          let index = 0;
          this.olddataforlog.forEach(res => {
            if (res.uuid === this.dataforlog[index].uuid) {
              this.olddataforlog.slice(index, 1);
            }
            index += 1;
          })
          this.dataforlog.slice(i, 1);
        }
        this.saveSession();
      }
    });
  }
  sendtobg() {
    this.getSession();
    let founduuid = false;
    for (let j = 0; j < this.dataforlog.length; j++) {
      for (let i = 0; i < this.olddataforlog.length; i++) {
        if (this.dataforlog[j].uuid === this.olddataforlog[i].uuid) { founduuid = true; break; }
      }
    }
    if (this.olddataforlog.length === 0 || !founduuid) {
      this.dataforlog.forEach(ele => {
        this.olddataforlog.push(ele);
      });
      this.saveSession();
      if (founduuid) {
        this.writethelog().subscribe();
      }
    } else {
      for (let i = 0; i < this.dataforlog.length; i++) {
        for (let j = 0; j < this.olddataforlog.length; j++) {
          if (this.dataforlog[i].uuid === this.olddataforlog[j].uuid) {
            if (this.dataforlog[i].page != this.olddataforlog[j].page || this.dataforlog[i].web != this.olddataforlog[j].web) {
              let oldday = new Date(this.olddataforlog[j].datetimeinpage);
              var today = new Date(this.dataforlog[i].datetimeinpage);
              this.dataforlog[i].oldpage = this.olddataforlog[j].page;
              this.dataforlog[i].oldweb = this.olddataforlog[j].web;
              this.olddataforlog[j].page = this.dataforlog[i].page;
              this.olddataforlog[j].web = this.dataforlog[i].web;
              this.olddataforlog[j].datetimeinpage = this.dataforlog[i].datetimeinpage;
              this.saveSession();
              this.writethelog().subscribe();
              break;
            }
          }
        }
      }
    }
  }
  initSession() {
    const sessionStorage = this.getSessionItem("Userhistory");
  }
  getSession() {
    const sessionStorage = this.getSessionItem("Userhistory");
    if (sessionStorage) {
      const session = JSON.parse(sessionStorage);
      this.olddataforlog = session.data;
    }
  }
  saveSession() {
    const session = {
      data: this.olddataforlog
    };
    this.setSessionItem("Userhistory", JSON.stringify(session));
  }
  clearSession() {
    this.olddataforlog = [];
    const session = {
      data: this.olddataforlog
    };
    this.setSessionItem("Userhistory", JSON.stringify(session));
  }
  writethelog(method = 'update') {
    if(window.location.hostname === "demo.monetoring.com" || window.location.hostname === "monetoring.com"){
    this.dataforlog.forEach(ele => {
      ele.usertime = (new Date().getTime() - new Date(ele.datetimelogin).getTime()) / 1000;
    });
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('method', method);
    urlSearchParams.append('data', JSON.stringify(this.dataforlog));
    const param = urlSearchParams.toString();
    // return this.request.post(`http://localhost:8686/logofdata`, param);
    return this.request.post(`https://cluster-api-center.monetoring.com:10006/logofdata`, param);
  }else{
     return this.request.get('assets/mock-demo/userhistory.json');
  }
  }
  closetabEvent() {
    window.addEventListener('beforeunload', (event) => {
      this.closetab();
    });
  }

}
