import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownComponent } from './bs-dropdown.component';
import { ClickOutsideModule } from '../click-outside/click-outside.module';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [BsDropdownComponent],
  exports: [BsDropdownComponent]
})
export class BsDropdownModule { }
