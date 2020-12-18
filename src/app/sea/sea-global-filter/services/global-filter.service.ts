import { Injectable } from '@angular/core';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { GlobalFilterModalComponent } from '../global-filter-modal/global-filter-modal.component';
import * as config from 'app/config/config';
import { GlobalVariableService } from "app/_services/global_variable/global-variable.service";
import { RequestService } from "app/_services/request/request.service";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SessionStorageHandler } from '../../../_inherit/session-storage-handler';
import { SeaService } from 'app/sea/_services/sea.service';

const GLOBAL_FILTER: string = 'global-filter';

@Injectable()
export class GlobalFilterService extends SessionStorageHandler {

  webId: number;
  customerId: number;
  active: boolean = false;
  focus: number = 0;
  globalFilter: any = {};
  campaigns: any = [];
  isEnabledOnlyCampaign: boolean = true;
  filterTemp = [];
  globalFilterObj: BehaviorSubject<any> = new BehaviorSubject(null);


  constructor(public modal: Modal,
    private globalVariable: GlobalVariableService,
    private request: RequestService,
    private seaService: SeaService) {
    super();
  }

  initSession() {
    const sessionStorage = this.getSessionItem(GLOBAL_FILTER);
    if (sessionStorage) {
      const session = JSON.parse(sessionStorage);
      this.webId = session.webId;
      this.customerId = session.customerId;
      this.setActive(session.active);
      this.setFocus(session.focus);
      this.setFilterTemp(session.filterTemp);
    }
  }

  saveSession() {
    let session = {
      webId: this.webId,
      customerId: this.customerId,
      active: this.active,
      focus: this.focus,
      filterTemp: this.filterTemp
    }
    this.setSessionItem(GLOBAL_FILTER, JSON.stringify(session));
  }

  getGlobalFilterSettings(item: any) {
    let url: string = `${config.SERVICES.SEA}/settings/sea`;
    let params: URLSearchParams = new URLSearchParams();
    params.append("method", "globalfilter_setting");
    params.append("webId", this.globalVariable.getWebId().toString());
    params.append("account", this.globalVariable.getActiveAccount());
    params.append("item", JSON.stringify(item));
    return this.request.post(url, params.toString());
  }

  setWebId(webId: number) {
    this.webId = webId;
  }

  isActive(): boolean {
    return this.active;
  }

  setActive(active: boolean) {
    this.active = active;
  }

  getFocus(): number {
    return this.focus;
  }

  setFocus(inputFocus: number) {
    this.focus = inputFocus;
  }

  setIsEnabledOnlyCampaign(isEnabledOnlyCampaign: boolean) {
    this.isEnabledOnlyCampaign = isEnabledOnlyCampaign;
  }

  setCampaigns(campaignList) {
    this.campaigns = campaignList;
  }

  getFilterTemp() {
    return this.filterTemp;
  }

  setFilterTemp(filterTemp) {
    this.filterTemp = filterTemp;
  }

  customGlobalFilterDialog() {
    this.modal.open(GlobalFilterModalComponent,
      overlayConfigFactory(
        {
          dataContext: {
            globalFilter: {
              mainSelector: {
                campaign_type: this.focus,
                isEnabledOnlyCampaign: this.isEnabledOnlyCampaign
              },
              campaigns: this.campaigns,
              filterTemp: this.filterTemp
            }
          }
        },
        BSModalContext
      )).then(dialog => dialog.result)
      .then(result => {
        this.active = Object.keys(result).length ? true : false;
        if (Object.keys(this.globalFilter = Object.assign({}, result)).length) {
          this.focus = Number(this.globalFilter['mainSelector']['campaign_type']);
          this.filterTemp = this.globalFilter.filterTemp;
          this.filterTemp = this.filterTemp.filter(filterItem => {
            if (filterItem[0] !== 'Campaign' && filterItem[0] !== 'Label') {
              return filterItem[2].toString().length > 0;
            }
            return true;
          })
          if (this.focus == 0 && !this.filterTemp.length) this.active = false;
        } else {
          this.focus = 0;
          this.filterTemp = [];
        }
        this.initGlobalFilterObj();
      }, error => {
      });
  }

  resetFiltering() {
    this.seaService.getCustomerId().then(customerId => {
      if (customerId != this.customerId || this.globalVariable.getWebId() != this.webId) {
        this.active = false;
        this.focus = 0;
        this.filterTemp = [];
        this.initGlobalFilterObj();
      }
    });
  }

  getFilterCampaign() {
    if (this.focus == 1) {
      return this.campaigns.filter(campaign => campaign.brand);
    } else if (this.focus == 2) {
      return this.campaigns.filter(campaign => !campaign.brand);
    } else {
      return this.campaigns;
    }
  }

  initGlobalFilterObj() {
    this.setWebId(this.globalVariable.getWebId());
    this.globalFilterObj.next({ campaigns: this.getFilterCampaign(), filterObj: this.filterTemp });
    this.seaService.getCustomerId()
      .then(customerId => {
        this.customerId = customerId;
        this.saveSession();
      });
  }

  getSizeAllCampaigns(): number {
    return this.campaigns.length;
  }
}
