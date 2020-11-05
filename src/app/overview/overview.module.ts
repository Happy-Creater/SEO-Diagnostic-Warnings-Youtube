import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewRoutingModule } from './overview-routing.module';
import { OverviewSeoComponent } from './overview-seo/overview-seo.component';
import { OverviewSeaComponent } from './overview-sea/overview-sea.component';
import { OverviewDataComponent } from './overview-data/overview-data.component';
import { OverviewTabComponent } from './overview-tab/overview-tab.component';
import { OverviewComponent } from './overview.component';



@NgModule({
  imports: [
    CommonModule,
    OverviewRoutingModule
  ],
  declarations: [
    OverviewComponent,
    OverviewTabComponent,
    OverviewDataComponent,
    OverviewSeaComponent,
    OverviewSeoComponent
  ]
})
export class OverviewModule { }
