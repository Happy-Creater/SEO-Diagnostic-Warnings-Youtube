import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caretClass'
})
export class CaretClassPipe implements PipeTransform {

  transform(value: number): any {
    if ( value > 0) {
      return 'fa-caret-up';
    }
    if ( value === 0) {
      return 'fa-caret-right';
    }
    if ( value < 0) {
      return 'fa-caret-down';
    }
  }

}
