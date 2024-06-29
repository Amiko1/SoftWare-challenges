import { Component } from '@angular/core';
import { levenshteinDistance } from '../utils/levenshteinDistance';

@Component({
  selector: 'app-string-similiarity',
  templateUrl: './string-similiarity.component.html',
  styleUrl: './string-similiarity.component.css',
})
export class StringSimiliarityComponent {
  value = 'ქონება';
  values = ['ქონება', 'ქონების გადასახადი', 'ქორწილი', 'საქონლის გასხვისება'];
}
