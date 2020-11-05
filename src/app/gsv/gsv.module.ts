import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsvComponent } from './gsv.component';
import { ChartModule } from 'angular2-highcharts';
import { BoxLoadingModule } from 'app/_modules/box-loading/box-loading.module';
import { FormatNumberWithKMBModule } from 'app/_modules/format-number/format-number-with-kmb.module';
import { GsvRoutingModule } from './gsv-routing.module';
import { DDCustomModule } from 'app/_modules/dd-custom/dd-custom.module';
import { TextboxClearableModule } from 'app/_modules/textbox-clearable/textbox-clearable.module';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';
import { GsvOverviewComponent } from './gsv-overview/gsv-overview.component';
import { ModalStandardModule } from 'app/_modules/modal-standard/modal-standard.module';
import { DropdownModule } from 'app/_modules/dropdown/dropdown.module';
import { TableStandardModule } from 'app/_modules/table-standard/table-standard.module';
import { ProgressBarModule } from 'app/_modules/progress-bar/progress-bar.module';
import { FormsModule } from '@angular/forms';
import { TextEvolutionPipe } from './_pipe/text-evolution/text-evolution.pipe';
import { LoadingDelayModule } from 'app/_modules/loading-delay/loading-delay.module';

@NgModule({
  imports: [
    CommonModule,
    GsvRoutingModule,
    ChartModule,
    BoxLoadingModule,
    DDCustomModule,
    TextboxClearableModule,
    ClickOutsideModule,
    FormatNumberWithKMBModule,
    ModalStandardModule,
    DropdownModule,
    TableStandardModule,
    ProgressBarModule,
    FormsModule,
    LoadingDelayModule
  ],
  declarations: [
    GsvComponent,
    GsvOverviewComponent,
    TextEvolutionPipe
  ]
})
export class GsvModule { }
