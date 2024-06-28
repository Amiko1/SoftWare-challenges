import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film, MainSearch } from '../@types/film-types';

@Injectable({
  providedIn: 'root',
})
export class FilmPresentationService {
  constructor(private httpClient: HttpClient) {}

  getFilms({ title }: { title: string }): Observable<Film> {
    const url = 'https://online-movie-database.p.rapidapi.com/v2/search';

    const params = new HttpParams().set('searchTerm', title).set('first', '10');

    return this.httpClient.get<Film>(url, { params });
  }
}
