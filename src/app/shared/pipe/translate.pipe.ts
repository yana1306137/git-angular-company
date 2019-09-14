import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
    constructor() {}
    transform(value: any) {
        let result: string;
        result = value;
        return result;
    }
}
