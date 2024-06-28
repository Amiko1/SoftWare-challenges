import { Component } from '@angular/core';
import { FilmPresentationService } from '../services/film-presentation.service';

@Component({
  selector: 'app-films-presentation',
  templateUrl: './films-presentation.component.html',
  styleUrl: './films-presentation.component.css',
})
export class FilmsPresentationComponent {
  films: unknown = [];

  constructor(private filmPresentationService: FilmPresentationService) {}

  ngOnInit(): void {
    this.filmPresentationService.getFilms('10').subscribe((data) => {
      this.films = data;
      console.log(data);
    });
  }
}
