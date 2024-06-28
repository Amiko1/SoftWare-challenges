import { Component } from '@angular/core';
import { FilmPresentationService } from '../services/film-presentation.service';
import { Observable } from 'rxjs';
import { Film } from '../@types/film-types';

@Component({
  selector: 'app-films-presentation',
  templateUrl: './films-presentation.component.html',
  styleUrl: './films-presentation.component.css',
})
export class FilmsPresentationComponent {
  films$!: Observable<Film>;
  title = 'starwars';

  constructor(private filmPresentationService: FilmPresentationService) {}

  ngOnInit() {
    this.searchFilms();
  }

  searchFilms(): void {
    this.films$ = this.filmPresentationService.getFilms({ title: this.title });
  }
}
