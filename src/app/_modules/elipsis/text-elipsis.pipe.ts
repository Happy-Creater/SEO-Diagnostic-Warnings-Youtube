import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textElipsis'
})
export class TextElipsisPipe implements PipeTransform {

  transform(value: string, max = 10): any {
    let result;
    if (value && value.length > max) {
      result = value.slice(0, max) + '...';
    } else {
      result = value;
    }
    return result;
  }

}
