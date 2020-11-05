import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { LightboxModule } from 'angular2-lightbox/lightbox.module';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';
import { DownloadPopupModule } from "app/_modules/download-popup/download-popup.module";
import { DropdownModule } from "app/_modules/dropdown/dropdown.module";
import { ChartModule } from "angular2-highcharts";
import { ModalStandardModule } from "app/_modules/modal-standard/modal-standard.module";
import { QuestionsCommentsModule } from 'app/_modules/questions-comments/questions-comments.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LightboxModule,
        LoadingDelayModule,
        DownloadPopupModule,
        DropdownModule,
        ChartModule,
        ModalStandardModule,
        QuestionsCommentsModule
    ],
    declarations: [
    ],
    entryComponents: [
    ],
    providers: [
    ],
    exports: [
    ]
})
export class SeoDiagnosticWarningsSharedModule { }
