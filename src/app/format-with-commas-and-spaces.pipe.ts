import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatWithCommasAndSpaces' })
export class FormatWithCommasAndSpacesPipe implements PipeTransform {
  transform(value: string | number): string {
    return String(value).replace(/,/g, ', ');
  }
}
