import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickOutsideModule } from '../click-outside/click-outside.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [DropdownComponent],
  exports: [DropdownComponent]
})
export class DropdownModule { }
