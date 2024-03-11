import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatProductTitle',
  standalone: true
})
export class FormatProductTitlePipe implements PipeTransform {

  transform(value: string): string {
    // 1. Remove "EMAIL" if it exists at the end (case-insensitive)
    let formattedString = value.replace(/_?EMAIL$/i, '');

    // 2. Split by underscores and capitalize each word
    const words = formattedString.split('_').map(word => {
      // Convert the entire word to lowercase first
      return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
    });

    // 3. Join the words back together with spaces
    return words.join(' ');
  }


}
