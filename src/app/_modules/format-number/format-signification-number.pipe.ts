import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'formatNumberSignification'
})
export class FormatNumberSignificationPipe implements PipeTransform {
    transform(value: string): string {
        var num = Number(value);
        if (num > 0) {
            return "+" + num;
        } else {
            return num.toString();
        }
    }
} 