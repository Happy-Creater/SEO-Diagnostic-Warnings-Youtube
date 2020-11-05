import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeoSeaSynergyComponent } from './seo-sea-synergy.component';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { DropdownModule } from 'app/_modules/dropdown/dropdown.module';
import { ChartModule } from 'angular2-highcharts';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
import { DownloadPopupModule } from '../../../_modules/download-popup/download-popup.module';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { AbbreviateNumberModule } from "app/_modules/abbreviate-number/abbreviate-number.module";
import { SearchDropdownModule } from 'app/_modules/search-dropdown/search-dropdown.module';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableStandardModule,
    DropdownModule,
    ChartModule,
    TextboxClearableModule,
    ModalModule.forRoot(),
    BootstrapModalModule,
    LoadingDelayModule,
    DownloadPopupModule,
    AbbreviateNumberModule,
    ClickOutsideModule,
    SearchDropdownModule
  ],
  declarations: [
    SeoSeaSynergyComponent
  ],
  entryComponents: [],
  exports: [
    SeoSeaSynergyComponent
  ]
})
export class SeoSeaSynergyModule { }
