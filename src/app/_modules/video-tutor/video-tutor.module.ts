import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoTutorComponent } from './video-tutor.component';
import { CategoryModule } from 'app/_modules/category/category.module';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';

@NgModule({
    imports: [
        CommonModule,
        CategoryModule,
        ClickOutsideModule
    ],
    declarations: [VideoTutorComponent],
    exports: [VideoTutorComponent]
})
export class VideoTutorModule { }