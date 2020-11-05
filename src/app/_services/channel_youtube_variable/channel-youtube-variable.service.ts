import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import { RequestService } from "app/_services/request/request.service";
import * as config from 'app/config/config';
import { Subject } from "rxjs/Subject";
import { ChannelYoutubeObject } from './channel-youtube-object';
import { environment } from 'environments/environment';
import { HttpClientRequestService } from '../http_client_request/http-client-request.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ChannelYoutubeVariableService {

  initChannelYoutube: BehaviorSubject<ChannelYoutubeObject[]> = new BehaviorSubject(null);

  channelYoutubeChange: BehaviorSubject<ChannelYoutubeObject> = new BehaviorSubject(null);

  channelYoutubeCurrently: ChannelYoutubeObject = null;

  constructor(private service: HttpClientRequestService, private global: GlobalVariableService) {
  }

  init(account, webId) {
    let urlSearchParams = new HttpParams();
    // urlSearchParams.append('method', 'get_website_relation_list');
    urlSearchParams = urlSearchParams.set('method', 'get_website_relation_list_with_channel_name')
      .set('subDomain', account)
      .set('webId', webId)
      .set('item', JSON.stringify({ status: 'youtube' }));

    let urlRender = `${config.SERVICES.setting_crawler}/service/crawler`;

    let responseDemo = {
      "result": [{
        "id": 1150,
        "url": "https://www.youtube.com/channel/UCSUsedzrYjYrzzT4WTDTTIw",
        "channelName": ""
      }, {
        "id": 1152,
        "url": "https://www.youtube.com/channel/UC3aAGQYPljZyhAl-4_fb4yg",
        "channelName": ""
      }, {
        "id": 1155,
        "url": "https://www.youtube.com/channel/UCYb-RSEigZImLhDOYLpykzQ",
        "channelName": ""
      }],
      "status": "ok"
    };

    if (environment.MONETORING_TYPE == 'demo') {

      let channelYoutubeList = responseDemo.result;

      if (Object.keys(channelYoutubeList).length === 0) {
        this.setChannelYoutube(null);
        this.initChannelYoutube.next([]);
      } else {
        this.initChannelYoutube.next(channelYoutubeList);
      }

    } else {

      this.service.get(urlRender, urlSearchParams).subscribe(responseChannelYoutubeObj => {

        // console.log('### INIT 1');
        // console.log(responseChannelYoutubeObj.result);
        let channelYoutubeList = responseChannelYoutubeObj.result;
        // console.log('### INIT 2');
        // console.log(channelYoutubeList);

        if (Object.keys(channelYoutubeList).length === 0) {
          this.setChannelYoutube(null);
          this.initChannelYoutube.next([]);
        } else {
          this.initChannelYoutube.next(channelYoutubeList);
        }
      });

    }
  }

  setChannelYoutube(channelYoutubeObj: ChannelYoutubeObject) {
    this.channelYoutubeChange.next(channelYoutubeObj);
  }

  getChannelYoutube(): ChannelYoutubeObject {
    // console.log('getChannelYoutube()');
    // console.log(this.channelYoutubeChange);
    return this.channelYoutubeChange.value;
  }
}