import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SeoOffsiteOptBlogAutomationComponent } from './seo-offsite-opt-blog-automation.component';
import { SeoOffsiteOptBlogAutomationRoutingModule } from './seo-offsite-opt-blog-automation-routing.module';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { BoxLoadingModule } from 'app/_modules/box-loading/box-loading.module';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { ModalUtilService } from 'app/_services/util/modal-util.service';
import { ProgressBarModule } from 'app/_modules/progress-bar/progress-bar.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { DropdownModule } from "app/_modules/dropdown/dropdown.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SeoKeywordsRankCheckerComponent } from '../../../seo-keywords/seo-keywords-rank-checker/seo-keywords-rank-checker.component';
import { DownloadPopupModule } from "app/_modules/download-popup/download-popup.module";
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
@NgModule({
  imports: [
    DownloadPopupModule,
    CommonModule,
    FormsModule,
    SeoOffsiteOptBlogAutomationRoutingModule,
    TableStandardModule,
    BoxLoadingModule,
    ModalStandardModule,
    ProgressBarModule,
    TooltipModule,
    TextboxClearableModule,
    DropdownModule,
    ReactiveFormsModule,
    LoadingDelayModule

  ],
  declarations: [
    SeoOffsiteOptBlogAutomationComponent
  ],
  providers:[
    ModalUtilService,
    SeoKeywordsRankCheckerComponent,
    LoadingDelayModule
  ]
})
export class SeoOffsiteOptBlogAutomationModule { }
