import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeoDiagnosticWarningsComponent } from './seo-diagnostic-warnings.component';
import { YoutubeHomeComponent } from './youtube/components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: SeoDiagnosticWarningsComponent,
    children: [
      {
        path: '',
        component: YoutubeHomeComponent
      },
      {
        path: 'youtube',
        component: YoutubeHomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeoDiagnosticWarningsRoutingModule { }
