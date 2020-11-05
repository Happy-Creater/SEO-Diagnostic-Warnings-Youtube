import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'app/_modules/click-outside/click-outside.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionsCommentsComponent } from './questions-comments.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [QuestionsCommentsComponent],
  exports: [QuestionsCommentsComponent]
})
export class QuestionsCommentsModule { }
