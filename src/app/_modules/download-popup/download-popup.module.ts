import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadPopupComponent } from './download-popup.component';
import { ClickOutsideModule } from "../click-outside/click-outside.module";

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [DownloadPopupComponent],
  exports: [DownloadPopupComponent]
})
export class DownloadPopupModule { }
