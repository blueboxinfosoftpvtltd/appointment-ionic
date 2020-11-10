import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('REQUEST_BODY', JSON.stringify(httpRequest.body))
        console.log('REQUEST_HEADER', JSON.stringify(httpRequest.headers));
        console.log('REQUEST_PARAMS', JSON.stringify(httpRequest.params));
        return next.handle(httpRequest);
    }
}