import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: number): any {
    if (isNaN(value)) {
      return '-';
    }

    if (value < 0) {
      value =  value * (-1);
    }
    if (value > 999999) {
      const rest = value % 100000;
      const dived = Math.floor(value / 100000);
      if (rest === 0) {
        return dived + 'M';
      }
      return dived + 'M' + rest;
    }
    // if (value > 9999) {
    //   const rest = value % 1000;
    //   const dived = Math.floor(value / 1000);
    //   if (rest === 0) {
    //     return dived + 'k';
    //   }
    //   return dived + 'k' + rest;
    // }
    return value;
  }

}
