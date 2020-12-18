import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChannelYoutubeObject } from 'app/_services/channel_youtube_variable/channel-youtube-object';
import { DropdownItem } from 'app/_modules/dropdown/dropdown-item';
import { ChannelYoutubeVariableService } from 'app/_services/channel_youtube_variable/channel-youtube-variable.service';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { Subject } from 'rxjs/Subject';
import { RequestService } from 'app/_services/request/request.service';
import * as config from 'app/config/config';
import { GlobalDateItem } from 'app/_services/global_date/global-date-object';
import { environment } from 'environments/environment';
import { HttpClientRequestService } from 'app/_services/http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

const moment: any = require('moment');

@Component({
  selector: 'app-seo-youtube',
  templateUrl: './seo-youtube.component.html',
  styleUrls: ['./seo-youtube.component.css']
})
export class SeoYoutubeComponent {

  unsubscribe = new Subject<void>();
  unsubscribeGlobalVariable
  unsubscribeChannelYoutube;

  channelYoutubeSelected;
  channelYoutubeValueList;

  /** About calendar */
  current = moment();
  currentModule: string;
  firstScanDate: string;
  lastScanDate: string;
  dateRangePreviousScan: GlobalDateItem;
  /**============= */

  isSubscribe = false;

  constructor(
    private channelYoutube: ChannelYoutubeVariableService,
    private globalVariable: GlobalVariableService,
    private request: HttpClientRequestService
  ) {
  }

  ngAfterViewInit() {

    if (environment.MONETORING_TYPE == 'demo') {
      this.channelYoutube.init("new1", 1);
      // this.channelYoutube.init("new1", 1151);
      this.unsubscribeChannelYoutube = this.channelYoutube.initChannelYoutube
        .subscribe((mList) => {
          if (mList[0] != null && mList[0].id != undefined) {
            this.channelYoutubeValueList = mList;

            this.renderDropDownChannelYoutube(this.channelYoutubeValueList);
            this.channelYoutube.setChannelYoutube(this.channelYoutubeValueList[0]);
            this.channelYoutubeSelected = this.channelYoutubeValueList[0].id;

            /** About calendar */
            this.validateDateYoutube();
            /**============= */
          }
        });
    }

    this.unsubscribeGlobalVariable = this.globalVariable.websiteChange
      .subscribe((value) => {
        // console.log('Web change.');
        if (value !== null) {

          // if (this.unsubscribeChannelYoutube != null) {
          //   this.unsubscribeChannelYoutube.unsubscribe();
          // }
          // this.channelYoutube.init(value.account, value.webId);
          // this.channelYoutube.init("new1", 1151);
          // console.log('Web change 2.');
          this.createChannelYoutubeSelected();
          // this.unsubscribeChannelYoutube = this.channelYoutube.initChannelYoutube
          //   .subscribe((mList) => {
          //     this.isSubscribe = true;

          //     if (this.isSubscribe) {
          //       if (mList != null && mList[0] != null && mList[0].id != undefined) {
          //         this.channelYoutubeValueList = mList;

          //         this.renderDropDownChannelYoutube(this.channelYoutubeValueList);
          //         this.channelYoutube.setChannelYoutube(this.channelYoutubeValueList[0]);
          //         this.channelYoutubeSelected = this.channelYoutubeValueList[0].id;

          //         /** About calendar */
          //         this.validateDateYoutube();
          //         /**============= */
          //       }
          //     }

          //   });
        }
      });

    if (!this.isSubscribe) {
      // console.log('Web isSubscribe 1.');
      this.unsubscribeGlobalVariable = this.globalVariable.websiteChange
        .subscribe((value) => {
          // console.log('Web isSubscribe 2.');
          if (value !== null) {
            // console.log('Web isSubscribe 3.');
            this.channelYoutube.init(value.account, value.webId);
          }
          this.createChannelYoutubeSelected();
        });
    }

  }

  createChannelYoutubeSelected() {
    // console.log('Web createChannelYoutubeSelected 1.');
    this.unsubscribeChannelYoutube = this.channelYoutube.initChannelYoutube
      .subscribe((mList) => {
        this.isSubscribe = true;
        // console.log('Web createChannelYoutubeSelected 2.');
        if (this.isSubscribe) {
          // console.log('Web createChannelYoutubeSelected 3.');
          if (mList != null && mList[0] != null && mList[0].id != undefined) {
            this.channelYoutubeValueList = mList;

            this.renderDropDownChannelYoutube(this.channelYoutubeValueList);
            this.channelYoutube.setChannelYoutube(this.channelYoutubeValueList[0]);
            this.channelYoutubeSelected = this.channelYoutubeValueList[0].id;

            /** About calendar */
            this.validateDateYoutube();
            /**============= */
          }
        }

      });
  }

  ngOnDestroy(): void {
    if (this.unsubscribeGlobalVariable != null) {
      this.unsubscribeGlobalVariable.unsubscribe();
    }
    if (this.unsubscribeChannelYoutube != null) {
      this.unsubscribeChannelYoutube.unsubscribe();
    }
  }


  channelYoutubeList: ChannelYoutubeObject[];

  itemChannelYoutubeOption: DropdownItem[];

  onChannelYoutubeChange(channelYoutubeIdSelected) {
    // console.log('EVENT YOUTUBE onChannelYoutubeChange,');
    // console.log(channelYoutubeIdSelected);

    for (let tmp of this.channelYoutubeValueList) {
      if (tmp.id == channelYoutubeIdSelected) {
        // console.log('1. select ');
        // console.log(tmp);
        // console.log('2. select ');
        // console.log(this.channelYoutubeSelected);
        this.channelYoutube.setChannelYoutube(tmp);
        this.channelYoutubeSelected = channelYoutubeIdSelected;

        /** About calendar */
        this.validateDateYoutube();
        /**============= */
      }
    }

  }

  renderDropDownChannelYoutube(mList) {

    // console.log('>>>>>>>>>>> RENDER YOUTUBE DROPDOWN');
    // console.log(mList);

    let dropDownTmp: TmpItem[] = new Array();
    for (let tmp of mList) {
      if (tmp != undefined) {
        var obj = {
          value: tmp.id,
          label: tmp.url.toString(),
          channelName: tmp.channelName
        };
        dropDownTmp.push(obj);
      }
    }
    this.itemChannelYoutubeOption = dropDownTmp;
  }

  validateDateYoutube() {

    let account = this.globalVariable.getActiveAccount();
    let youtubeWebId = this.channelYoutubeSelected;

    try {
      const urlSearchParams = new HttpParams()
        .set('account', account)
        .set('webId', youtubeWebId.toString())
        .set('module', 'youtube');
      this.request.get(`${config.SERVICES.manage_calendar}/calendar/get_scan_date_specific_module`, urlSearchParams)
        .finally(() => {
          // console.log('this.firstScanDate::' + this.firstScanDate);
          // console.log('this.lastScanDate::' + this.lastScanDate);
          // console.log('this.current::' + this.current);
          this.setCalendarDateYoutube();
        })
        .subscribe(res => {
          if (res.first_date) {
            this.firstScanDate = res.first_date;
          } else {
            this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
          }
          if (res.last_date) {
            this.lastScanDate = res.last_date;
            this.current = moment(this.lastScanDate);
            this.dateRangePreviousScan = {
              start: new Date(moment(new Date(this.current.clone().subtract(3, 'month'))).format('YYYY-MM-DD')),
              end: new Date(moment(new Date(this.current)).format('YYYY-MM-DD')),
              startCompareTo: undefined,
              endCompareTo: undefined
            };
          } else {
            this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
          }
        }, error => {
          this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
          this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
        });
    } catch (e) {
      this.firstScanDate = moment(new Date()).format('YYYY-MM-DD');
      this.lastScanDate = moment(new Date()).format('YYYY-MM-DD');
    }

  }

  setCalendarDateYoutube() {
    setTimeout(() => {
      if (window['appGlobalComponentRef'].component.completeGetScanDate) {
        window['appGlobalComponentRef'].zone.run(() => {
          const fn = window['appGlobalComponentRef'].component;
          fn.calendarYoutubeMonthOfLastDate(this.firstScanDate, this.lastScanDate, this.channelYoutubeSelected);
          fn.validateDateScanningWebsite(this.globalVariable.getActiveAccount(), this.channelYoutubeSelected, null);
        });
      } else {
        this.setCalendarDateYoutube();
      }
    }, 100);
  }

  fixedLength(name, label) {
    let textInput = name;
    return textInput.length > 90 ? textInput.substring(0, 90) + "..." : textInput;
  }

}

export class TmpItem {
  label: string;
  value: any;
  channelName: string;
}

