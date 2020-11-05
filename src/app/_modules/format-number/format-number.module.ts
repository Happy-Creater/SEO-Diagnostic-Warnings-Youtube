import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumberSpacePipe } from './format-number.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FormatNumberSpacePipe],
    exports: [FormatNumberSpacePipe]
})
export class FormatNumberModule { }
