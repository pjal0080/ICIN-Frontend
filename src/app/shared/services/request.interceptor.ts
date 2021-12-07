import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = localStorage.getItem('token');
        let authReq = request;
        console.log("interceptor");
        console.log(token);
        if (token != null && token!='') {
            console.log("token");
            authReq = authReq.clone({

                setHeaders: {
                    // XTag: this.newGuid(),
                    Authorization: `Bearer ${token}`
                }
            });
        }
        console.log(authReq);
        return next.handle(authReq);

    }


}



