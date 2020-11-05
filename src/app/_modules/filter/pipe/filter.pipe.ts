import { Pipe, PipeTransform } from '@angular/core';

export declare type Operation = 'Equal' | 'NotEqual' | 'LessThan' | 'GreaterThan' | 'LessThanOrEqual' | 'GreaterThanOrEqual';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: any, operation: Operation = 'Equal'): any[] {
    if (items != undefined) {
      return items.filter(item => {
        switch (operation) {
          case 'Equal':
            return item[field] == value;
          case 'NotEqual':
            return item[field] != value;
          case 'LessThan':
            return item[field] < value;
          case 'GreaterThan':
            return item[field] > value;
          case 'LessThanOrEqual':
            return item[field] <= value;
          case 'GreaterThanOrEqual':
            return item[field] >= value;
          default:
            return true;
        }
      });
    }
    return items;
  }
}
