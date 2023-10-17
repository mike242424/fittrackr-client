import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatExerciseType',
})
export class FormatExerciseTypePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; 

    const words = value.split('_');
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    return words.join(' ');
  }
}
