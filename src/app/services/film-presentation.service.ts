import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmPresentationService {
  constructor(private httpClient: HttpClient) {}

  getFilms(id: string): Observable<unknown> {
    const url = `https://online-movie-
database.p.rapidapi.com/title/v2/find?title=starwars&amp;limit=20&amp;paginationKey=0&amp;sortArg=
moviemeter%2Casc`;

    return this.httpClient.get<unknown>(url);
  }
}
