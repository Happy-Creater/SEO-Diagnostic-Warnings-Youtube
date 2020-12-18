import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumberSignificationPipe } from './format-signification-number.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FormatNumberSignificationPipe],
    exports: [FormatNumberSignificationPipe]
})
export class FormatSignificationNumberModule { }
