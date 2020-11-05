import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { SeoGoogleMyBusinessService } from './seo-google-my-business.service';
import { LoadingDelayDirective } from 'app/_modules/loading-delay/loading-delay.directive';

@Component({
  selector: 'app-seo-google-my-business',
  templateUrl: './seo-google-my-business.component.html',
  styleUrls: ['./seo-google-my-business.component.css'],
  providers: [SeoGoogleMyBusinessService]
})
export class SeoGoogleMyBusinessComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(LoadingDelayDirective) boxloading: LoadingDelayDirective;

  websiteSubscription;
  getAccountsSubscription;

  accountSelected;
  accounts = [];

  showView = false;

  constructor(
    private globalVariable: GlobalVariableService,
    private service: SeoGoogleMyBusinessService,
    private ngZone: NgZone) {
    window['appSeoGoogleMyBusinessComponent'] = { component: this, zone: ngZone };
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.websiteSubscription = this.globalVariable.getWebsiteChange().subscribe(websiteItem => {
      this.showView = false;
      this.getAccounts();
    });
  }

  ngOnDestroy() {
    this.websiteSubscription.unsubscribe();
  }

  getAccounts() {
    this.accountSelected = this.service.getSelectedAccount();
    this.accounts = [];
    this.boxloading.show();
    this.getAccountsSubscription = this.service.getAccounts()
      .finally(() => { this.boxloading.hide(); })
      .subscribe(res => {
        if (res.status === 'ok') {
          this.accounts = res.accounts;
          if (this.accounts.indexOf(this.accountSelected) < 0) {
            this.selectAccount(this.accounts[0]);
          }
          this.showView = true;
        }
      }, err => {
        console.error(err);
      });
  }

  selectAccount(selectedAcc) {
    try {
      if (selectedAcc.indexOf(':') !== -1) {
        selectedAcc = selectedAcc.split(':')[1];
        selectedAcc = selectedAcc.trim();
      }
    } catch (e) { }
    this.accountSelected = selectedAcc;
    this.service.emitSelectedAccount(this.accountSelected);
  }

}
