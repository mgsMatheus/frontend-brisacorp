import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthTokenService } from "../services/auth-token.service";

@Injectable({
  providedIn: "root",
})
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authToken: AuthTokenService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const headersConfig: any = {};

    const token = this.authToken.get();

    if (token) {
      headersConfig["Authorization"] = `Bearer ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
