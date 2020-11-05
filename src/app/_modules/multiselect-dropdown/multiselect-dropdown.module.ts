import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiselectDropdownComponent } from './multiselect-dropdown.component';
import { DDCustomModule } from '../dd-custom/dd-custom.module';
import { ClickOutsideModule } from '../click-outside/click-outside.module';
import { TextboxClearableModule } from '../textbox-clearable/textbox-clearable.module';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule,
    DDCustomModule,
    TextboxClearableModule
  ],
  declarations: [MultiselectDropdownComponent],
  exports: [MultiselectDropdownComponent]
})
export class MultiselectDropdownModule { }
