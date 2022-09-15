import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {catchError, map, Observable, retry, throwError} from 'rxjs';
import {CookieService} from "ngx-cookie";
import {Router} from "@angular/router";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cookieService.get('access_token')
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization',`Bearer ${token}`)
      });
    }
    // ToDo setup error handler
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401) {
          this.logout()
          return throwError(() => error);
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  logout() {
    this.cookieService.remove('access_token')
    this.router.navigate(['login'])
  }
}
