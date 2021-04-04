import {Pipe, PipeTransform} from '@angular/core';

const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

@Pipe({
  name: 'monthString'
})
export class MonthStringPipe implements PipeTransform {

  transform(index: number): any {
    return months[index];
  }

}
