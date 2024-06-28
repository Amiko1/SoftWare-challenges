import { Component } from '@angular/core';
import { FilmPresentationService } from '../services/film-presentation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-films-presentation',
  templateUrl: './films-presentation.component.html',
  styleUrl: './films-presentation.component.css',
})
export class FilmsPresentationComponent {
  films$!: Observable<unknown>;

  constructor(private filmPresentationService: FilmPresentationService) {}

  ngOnInit(): void {
    this.films$ = this.filmPresentationService.getFilms();
  }
}
