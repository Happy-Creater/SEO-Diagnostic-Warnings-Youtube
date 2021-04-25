import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ChartModule } from 'angular2-highcharts';
import { LightboxModule } from 'angular2-lightbox/lightbox.module';

import { LoadingDelayModule } from '../../_modules/loading-delay/loading-delay.module';
import { DownloadPopupModule } from '../../_modules/download-popup/download-popup.module';
import { DropdownModule } from '../../_modules/dropdown/dropdown.module';
import { ModalStandardModule } from '../../_modules/modal-standard/modal-standard.module';
import { QuestionsCommentsModule } from '../../_modules/questions-comments/questions-comments.module';

import { SeoDiagnosticWarningsRoutingModule } from './seo-diagnostic-warnings-routing.module';
import { YoutubeModule } from './youtube/youtube.module';
import { SeoDiagnosticWarningsComponent } from './seo-diagnostic-warnings.component';

@NgModule({
  imports: [
    CommonModule,
    SeoDiagnosticWarningsRoutingModule,
    FormsModule,
    LightboxModule,
    LoadingDelayModule,
    DownloadPopupModule,
    DropdownModule,
    ModalStandardModule,
    QuestionsCommentsModule,
    YoutubeModule,
  ],
  declarations: [
    SeoDiagnosticWarningsComponent,
  ],
  providers: [ ],
})
export class SeoDiagnosticWarningsModule {
}
