import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export function configInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const key = '4746a79472mshb4e32011cd91405p1d5108jsn8eddc658a3e7';

  const reqWithHeader = req.clone({
    headers: req.headers.set('X-RapidAPI-Key', key),
  });

  return next(reqWithHeader);
}
