import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    const mm = date.getMonth() + 1; 
    const dd = date.getDate();
    const yyyy = date.getFullYear();

    return `${mm.toString().padStart(2, '0')}/${dd
      .toString()
      .padStart(2, '0')}/${yyyy}`;
  }
}
