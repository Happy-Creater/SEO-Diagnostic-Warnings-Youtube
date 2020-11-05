import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mappingTranslate'
})
export class MappingTranslatePipe implements PipeTransform {

  transform(value: string, args?: string): string {
    let result = value.toString().replace(/\W+/g, '_');
    return args + '.' + result;
  }

}
