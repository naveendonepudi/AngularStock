import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const newReq = req.clone({
      params: (req.params ? req.params : new HttpParams())
        .append('token', 'bu4f8kn48v6uehqi3cqg')
    });

    return next.handle(newReq);
  }
}