import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter',
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // Handle empty or null values

    // Capitalize the first letter and keep the rest of the string in lowercase
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  }
}
