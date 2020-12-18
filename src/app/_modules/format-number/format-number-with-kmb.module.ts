import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumberWithKMBPipe } from 'app/_modules/format-number/format-number-with-kmb.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [FormatNumberWithKMBPipe],
    exports: [FormatNumberWithKMBPipe]
})
export class FormatNumberWithKMBModule { }
