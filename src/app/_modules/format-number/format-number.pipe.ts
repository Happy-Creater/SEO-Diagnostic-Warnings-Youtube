import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'formatNumberSpace'
})
export class FormatNumberSpacePipe implements PipeTransform {
    transform(value: string): string {
        let result = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        result = result.replace(/\./g, '').replace(',', ' ');
        return result;
    }
} 