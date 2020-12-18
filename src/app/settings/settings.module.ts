import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { MyDatePickerModule } from 'mydatepicker';
import { ToolTipModule } from '../_modules/tooltip/tool-tip.module';
import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { TableStandardModule } from '../_modules/table-standard/table-standard.module';
import { MenuModule } from '../_modules/menu/menu.module';
import { ModalStandardModule } from '../_modules/modal-standard/modal-standard.module';
import { ProgressBarModule } from '../_modules/progress-bar/progress-bar.module';
import { ProgressbarLoadingModule } from "../_modules/progressbar-loading/progressbar-loading.module";
import { ClickOutsideModule } from '../_modules/click-outside/click-outside.module';
import { DownloadPopupModule } from '../_modules/download-popup/download-popup.module';
import { BoxLoadingModule } from '../_modules/box-loading/box-loading.module';
import { TextMaskModule } from 'angular2-text-mask';
import { DropdownModule } from "app/_modules/dropdown/dropdown.module";
import { BsDropdownModule } from 'app/_modules/bs-dropdown/bs-dropdown.module';
import { DDCustomModule } from '../_modules/dd-custom/dd-custom.module';
import { SlimScroll } from 'angular-io-slimscroll'; //npm i angular-io-slimscroll --save
import { TextboxClearableModule } from '../_modules/textbox-clearable/textbox-clearable.module';
import { SettingsTutorialsComponent } from './settings-tutorials/settings-tutorials.component';
import { SettingsCrawlerComponent } from './settings-crawler/settings-crawler.component';
import { SettingsConfigurationsWebsiteComponent } from './settings-configurations/settings-configurations-website/settings-configurations-website.component';
import { SettingsConfigurationsEmailComponent } from './settings-configurations/settings-configurations-email/settings-configurations-email.component';
import { SettingsConfigurationsCampignsComponent } from './settings-configurations/settings-configurations-campigns/settings-configurations-campigns.component';
import { SettingsConfigurationsIpAddressComponent } from './settings-configurations/settings-configurations-ip-address/settings-configurations-ip-address.component';
import { SettingsConfigurationsUsersComponent } from './settings-configurations/settings-configurations-users/settings-configurations-users.component';
import { SettingsConfigurationsServerComponent } from './settings-configurations/settings-configurations-server/settings-configurations-server.component';
import { SettingsKeywordsComponent } from './settings-keywords/settings-keywords.component';
import { SettingsWarningsComponent } from './settings-warnings/settings-warnings.component';
import { SettingsConfigurationsComponent } from './settings-configurations/settings-configurations.component';
import { SettingsSetComponent } from './settings-set/settings-set.component';
import { Autosize } from 'angular2-autosize/src/autosize.directive'; //npm install angular2-autosize --save
import { CategoryModule } from '../_modules/category/category.module';
import { VideoTutorModule } from '../_modules/video-tutor/video-tutor.module';
import { CheckboxControllerModule } from "app/_modules/checkbox-controller/checkbox-controller.module";
import { NguiAutoCompleteModule } from "@ngui/auto-complete/dist";
import { TranslateModule } from '@ngx-translate/core';
import { FileDropModule } from 'ngx-file-drop';
import { ModalModule as ModalModuleBootstrap } from 'ngx-bootstrap/modal';

import { ModalUtilService } from 'app/_services/util/modal-util.service';

import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';

@NgModule({
  imports: [
    BootstrapModalModule,
    ChartModule,
    CommonModule,
    ClickOutsideModule,
    DownloadPopupModule,
    SettingsRoutingModule,
    MenuModule,
    ModalStandardModule,
    FormsModule,
    DownloadPopupModule,
    ModalModule.forRoot(),
    ProgressBarModule,
    ProgressbarLoadingModule,
    TableStandardModule,
    ToolTipModule,
    BoxLoadingModule,
    TextMaskModule,
    DropdownModule,
    DDCustomModule,
    BsDropdownModule,
    TextboxClearableModule,
    CategoryModule,
    MyDatePickerModule,
    VideoTutorModule,
    CheckboxControllerModule,
    NguiAutoCompleteModule,
    TranslateModule,
    FileDropModule,
    LoadingDelayModule,
    ModalModuleBootstrap.forRoot()
  ],
  declarations: [
    SettingsComponent,
    SettingsTutorialsComponent,
    SettingsCrawlerComponent,
    SettingsKeywordsComponent,
    SettingsWarningsComponent,
    SettingsConfigurationsComponent,
    SettingsSetComponent,
    SettingsConfigurationsWebsiteComponent,
    SettingsConfigurationsEmailComponent,
    SettingsConfigurationsCampignsComponent,
    SettingsConfigurationsIpAddressComponent,
    SettingsConfigurationsUsersComponent,
    SettingsConfigurationsServerComponent,
    Autosize,
    SlimScroll
  ],
  entryComponents: [
  ],
  providers:[
    ModalUtilService
  ]

})
export class SettingsModule { }
