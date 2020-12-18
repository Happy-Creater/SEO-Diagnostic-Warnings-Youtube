import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Daterangepicker } from 'ng2-daterangepicker';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalStandardModule } from './_modules/modal-standard/modal-standard.module';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication/authentication.service';
import { RequestService } from './_services/request/request.service';
import { GlobalVariableService } from './_services/global_variable/global-variable.service';
import { GlobalDateService } from './_services/global_date/global-date.service';
import { InitializeService } from './_services/initialize/initialize.service';
import { DummyComponent } from './dummy/dummy.component';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService'
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { DDCustomModule } from './_modules/dd-custom/dd-custom.module';
import { ClickOutsideModule } from './_modules/click-outside/click-outside.module';
import { AuthorizedComponent } from './authorized/authorized.component';
import { StagingWebsiteVariableService } from "app/_services/staging_website_variable/staging-website-variable.service";
import { CategoryModule } from './_modules/category/category.module';
import { CategoryService } from './_modules/category/service/category.service';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { UnavaiableComponent } from './unavaiable/unavaiable.component';
import { TextElipsisModule } from 'app/_modules/elipsis/text-elipsis.module';
import { MessageService } from './_services/messages/message-service.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserAccessService } from './_services/user_access/user-access.service';
import { LocalizedDateModule } from 'app/_modules/localized-date/localized-date.module';
import { AppMultiselectDropdownComponent } from './app-multiselect-dropdown/app-multiselect-dropdown.component';
import { SeaService } from './sea/_services/sea.service';
import { TokenInterceptor } from './_services/http_client_request/token.interceptor';
import { HttpClientRequestService } from './_services/http_client_request/http-client-request.service';
import { OfflineComparisonModule } from 'app/_modules/offline-comparison/offline-comparison.module';
import { GlobalFilterService } from './sea/sea-global-filter/services/global-filter.service';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { GlobalFilterModalComponent } from './sea/sea-global-filter/global-filter-modal/global-filter-modal.component';
import { UserhistoryService } from './_services/userhistory/userhistory.service';
export function highchartsFactory() {
  let hc = require('highcharts');
  let modules = [
    require('highcharts/highcharts-more'),
    require('highcharts/modules/exporting'),
    require('highcharts/modules/solid-gauge'),
    require('highcharts/modules/map'),
    require('highcharts/modules/networkgraph'),
    require('highcharts/modules/offline-exporting'),
    require('highcharts/modules/no-data-to-display'),
    require('highcharts/modules/variable-pie'),
    require('highcharts/modules/wordcloud')
  ];
  for (let module of modules) {
    module(hc);
  }
  return hc;
}

export const Highcharts = require('highcharts');

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    DummyComponent,
    AuthorizedComponent,
    UnavaiableComponent,
    AppMultiselectDropdownComponent,
    GlobalFilterModalComponent
  ],
  imports: [
    BrowserModule,
    Daterangepicker,
    MyDatePickerModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    ModalStandardModule,
    VirtualScrollModule,
    DDCustomModule,
    ClickOutsideModule,
    CategoryModule,
    TextboxClearableModule,
    TextElipsisModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LocalizedDateModule,
    OfflineComparisonModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  entryComponents: [
    GlobalFilterModalComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    RequestService,
    GlobalVariableService,
    GlobalDateService,
    InitializeService,
    StagingWebsiteVariableService,
    MessageService,
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    CategoryService,
    UserAccessService,
    SeaService,
    HttpClientRequestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    UserhistoryService,
    GlobalFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
