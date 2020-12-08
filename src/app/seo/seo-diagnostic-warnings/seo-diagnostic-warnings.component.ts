import { Component, OnInit } from '@angular/core';
import { GlobalVariableService } from 'app/_services/global_variable/global-variable.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-seo-diagnostic-warnings',
  templateUrl: './seo-diagnostic-warnings.component.html',
  styleUrls: ['./seo-diagnostic-warnings.component.css']
})
export class SeoDiagnosticWarningsComponent {

  globalListener;
  webId;
  account;
  websiteUrl;

  constructor(private global: GlobalVariableService) { }

  ngAfterViewInit() {

    this.globalListener = Observable.combineLatest(
      this.global.getWebsiteChange()
    ).subscribe(([websiteItem]) => {
      this.webId = websiteItem.webId;
      this.account = websiteItem.account;
      this.websiteUrl = websiteItem.url;
    });
  }

  ngOnDestroy(): void {
    if (this.globalListener != undefined) {
      this.globalListener.unsubscribe();
    }
  }

}
