import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function configInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const key = '17e61bf219msh19222af8c1a0480p1a9e7fjsn5a4297b5b87a';

  const reqWithHeader = req.clone({
    headers: req.headers.set('X-RapidAPI-Key', key),
  });

  return next(reqWithHeader);
}
