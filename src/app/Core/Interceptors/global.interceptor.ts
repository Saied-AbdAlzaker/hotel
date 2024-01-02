import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('userToken');
    const baseUrl:string = 'http://upskilling-egypt.com:3000/api/v0/';
    let newHeaders = {};
    if(token!==null){
      newHeaders = {
      'Authorization' : ` ${token}`
      }
    }
    let newRequest = request.clone({
      setHeaders:newHeaders, url: baseUrl+request.url
    })   
    return next.handle(newRequest);
  }
}
