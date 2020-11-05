import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstText'
})
export class FirstTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const strVal = value.toString();
    if (strVal.length) {
      return strVal.substring(0, 1);
    }
    return strVal;
  }

}
