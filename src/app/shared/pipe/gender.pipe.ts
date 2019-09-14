import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'genderPipe'})
export class GenderPipe implements PipeTransform {
    constructor() {}
    transform(value: any, args: any): any {
        if (!value) {return '-'; }
        let result: string;
        switch (value.toLowerCase()) {
            case 'l': result = 'Laki-laki';
                      break;
            case 'p': result = 'Perempuan';
                      break;
            default: result = '-';
                     break;
        }
        return result;
    }
}
