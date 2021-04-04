import {Component, OnInit} from '@angular/core';
import {GlobalVariableService} from '../../_services/global_variable/global-variable.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-seo-diagnostic-warnings',
  templateUrl: './seo-diagnostic-warnings.component.html',
  styleUrls: ['./seo-diagnostic-warnings.component.css']
})
export class SeoDiagnosticWarningsComponent implements OnInit {

  globalListener;
  webId;
  account;
  websiteUrl;

  constructor(private global: GlobalVariableService) {
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy(): void {
    if (this.globalListener !== undefined) {
      this.globalListener.unsubscribe();
    }
  }

}
