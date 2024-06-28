import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string): string {
    if (this.isDate(value)) {
      return this.datePipe.transform(value, 'HH:mm:ss MMM dd yyyy') || value;
    }
    return value;
  }

  private isDate(value: string): boolean {
    return !isNaN(Date.parse(value));
  }
}
