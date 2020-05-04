import { Pipe, PipeTransform } from '@angular/core'
import * as moment from "moment";
@Pipe({
    name: 'format'
})
export class DateFormatPipe implements PipeTransform {
    transform(date: Date, args?: string): any {
        let format = (args) ? args : "LLLL";
        return moment(date).format(format);
    }
}