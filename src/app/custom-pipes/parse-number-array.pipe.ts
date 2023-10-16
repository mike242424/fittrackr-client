import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseNumberArray'
})
export class ParseNumberArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
