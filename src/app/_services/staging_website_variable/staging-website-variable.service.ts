import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { StagingWebsiteObject } from "app/_services/staging_website_variable/staging-website-object";
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import { RequestService } from "app/_services/request/request.service";
import * as config from 'app/config/config';
import { Subject } from "rxjs/Subject";

@Injectable()
export class StagingWebsiteVariableService {

  initStagingWebsite: Subject<StagingWebsiteObject[]> = new Subject();

  stagingWebsiteChange: BehaviorSubject<StagingWebsiteObject> = new BehaviorSubject(null);

  stagingWebsiteCurrently: StagingWebsiteObject = null;

  constructor(private service: RequestService, private global: GlobalVariableService) {
  }

  init(account, webId) {

    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('method', 'get_staging_websites');
    urlSearchParams.append('subDomain', account);
    urlSearchParams.append('webId', webId);
    let param = urlSearchParams.toString();

    let urlRender = `${config.SERVICES.website_manager}/website/find_staging?` + param;

    this.service.get(urlRender).subscribe(stagingWebsiteObj => {
      // console.log(stagingWebsiteObj);

      if (Object.keys(stagingWebsiteObj).length === 0) {
        this.setStagingWebsite(null);
        this.initStagingWebsite.next([]); // when a website not have a staging website.
      } else {
        this.initStagingWebsite.next(stagingWebsiteObj);
      }
      // let stagingWebsiteObj = [{
      //   webId: 1,
      //   url: "http://hello.com/aaaaaaaaaaaaaaaaaaaaaaaaaaa1"
      // }, {
      //   webId: 2,
      //   url: "http://byebye.com/2"
      // }]

    });
  }

  setStagingWebsite(stagingObj: StagingWebsiteObject) {
    this.stagingWebsiteChange.next(stagingObj);
    // this.stagingWebsiteCurrently = stagingObj;
  }

  getStagingWebsite(): StagingWebsiteObject {
    return this.stagingWebsiteChange.value;
    // return this.stagingWebsiteCurrently;
  }
}

//module
// func(){
//   this.serv.initStagingWebsite.sub((mList)=>{
//     this.mList=mList;
//     if(this.serv.getStagingWebsite === null && this.mList.len !==0){
//        render dropdown
//       setStagingWebsite(this.mList[0]);
//     }else{
//       mVal=this.stagingWebsiteChange.value;
//     }
//   });
//   this.websiteChange.sub(obj=>{
//     init(acc,webId);
//   });
// }