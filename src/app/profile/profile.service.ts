import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { RequestService } from "app/_services/request/request.service";
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import * as config from 'app/config/config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProfileService {

  constructor(
    private request: RequestService,
    private globalVariable: GlobalVariableService

  ) { }

  getUserDetail(item) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('method', 'get_tag_name');
    urlSearchParams.append('subDomain', this.globalVariable.getActiveAccount());
    urlSearchParams.append('item', JSON.stringify(item));
    const param = urlSearchParams.toString();
    return this.request.get(`${config.SERVICES.manage_user}/setting/user?` + param);
  }

  changePassword(item) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('method', 'change_password');
    urlSearchParams.append('subDomain', this.globalVariable.getActiveAccount());
    urlSearchParams.append('item', JSON.stringify(item));
    const param = urlSearchParams.toString();
    return this.request.get(`${config.SERVICES.manage_user}/setting/user?` + param);
  }

}
