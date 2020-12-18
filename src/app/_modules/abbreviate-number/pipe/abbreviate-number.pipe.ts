import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateNumber'
})
export class AbbreviateNumberPipe implements PipeTransform {

  transform(value: number, decimal: number = 2): string {
    if (value >= 1000) {
      var length = value.toString().length;
      decimal = Math.pow(10, decimal);
      length -= length % 3;
      return (Math.round((value * decimal) / Math.pow(10, length)) / decimal) + ' kMGTPE'[length / 3];
    }
    return value.toString();
  }
}
