import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GsvComponent } from './gsv.component';
import { GsvOverviewComponent } from './gsv-overview/gsv-overview.component';

const routes = [
  {
    path: '', component: GsvComponent,
    children: [
      { path: '', redirectTo: 'gsv-overview', pathMatch: 'full' },
      { path: 'gsv-overview', component: GsvOverviewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GsvRoutingModule { }
