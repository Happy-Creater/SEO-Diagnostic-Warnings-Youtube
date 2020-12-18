import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalStandardComponent } from './modal-standard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ModalStandardComponent],
  exports: [ModalStandardComponent]
})
export class ModalStandardModule { }
