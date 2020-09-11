import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const started = Date.now();
    console.log('Logging Interceptor', request.url);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          console.log('Error Interceptor', 'Bad Request');
        }

        if (error.status === 401) {
          console.log('Error Interceptor', 'Unauthorized');
        }

        if (error.status === 404) {
          console.log('Error Interceptor', 'Not found');
        }

        return throwError(error);
      })
    );
  }
}
