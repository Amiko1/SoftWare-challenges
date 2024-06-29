import { Component, Input, input } from '@angular/core';
import { levenshteinDistance } from '../../utils/levenshteinDistance';

@Component({
  selector: 'app-calculate-equality',
  templateUrl: './calculate-equality.component.html',
  styleUrl: './calculate-equality.component.css',
})
export class CalculateEqualityComponent {
  @Input() value!: string;
  @Input() values!: string[];

  getSimilarityPercentage(str1: string, str2: string) {
    const distance = levenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    const similarity = ((maxLength - distance) / maxLength) * 100;
    return similarity.toFixed(2);
  }
}
