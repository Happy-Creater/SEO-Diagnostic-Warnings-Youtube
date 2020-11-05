import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MappingTranslatePipe } from './mapping-translate.pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MappingTranslatePipe],
    exports: [MappingTranslatePipe]
})
export class MappingTranslateModule { }
