import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextboxClearableModule } from '../textbox-clearable/textbox-clearable.module';

import { ClickOutsideModule } from '../click-outside/click-outside.module';
import { SearchDropdownComponent } from './search-dropdown.component';

@NgModule({
    imports: [
        CommonModule,        
        TextboxClearableModule,
        ClickOutsideModule,
    ],
    declarations: [SearchDropdownComponent],
    exports: [SearchDropdownComponent]
})
export class SearchDropdownModule { }