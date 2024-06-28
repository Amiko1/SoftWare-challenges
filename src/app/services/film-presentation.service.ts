import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmPresentationService {
  constructor(private httpClient: HttpClient) {}

  getFilms({ title }: { title: string }): Observable<unknown> {
    const url = `https://online-movie-database.p.rapidapi.com/title/v2/find`;

    const params = new HttpParams()
      .set('title', title)
      .set('limit', '20')
      .set('sortArg', 'moviemeter,asc');

    return this.httpClient.get<unknown>(url, { params });
  }
}
