import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEvolution'
})
export class TextEvolutionPipe implements PipeTransform {

  transform(value: any, type?: any): string {
    if (type == 'evolution-text-label') {
      if (value == 101) {
        return '-';
      } else if (value > 0) {
        return '+' + value + '%';
      } else if (value < 0) {
        return value + '%';
      } else {
        return '=';
      }
    } else if (type == 'color-text-class') {
      if (value == 101) {
        return '';
      } else if (value > 0) {
        return 'text-green';
      } else if (value < 0) {
        return 'text-red';
      } else {
        return 'text-orange';
      }
    }

    return "";
  }

}
