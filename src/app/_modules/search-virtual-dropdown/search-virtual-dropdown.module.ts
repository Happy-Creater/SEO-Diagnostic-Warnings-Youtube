import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxClearableModule } from '../textbox-clearable/textbox-clearable.module';

import { ClickOutsideModule } from '../click-outside/click-outside.module';
import { SearchVirtualDropdownComponent } from './search-virtual-dropdown.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

@NgModule({
    imports: [
        CommonModule,
        TextboxClearableModule,
        ClickOutsideModule,
        VirtualScrollModule
    ],
    declarations: [SearchVirtualDropdownComponent],
    exports: [SearchVirtualDropdownComponent]
})
export class SearchVirtualDropdownModule { }