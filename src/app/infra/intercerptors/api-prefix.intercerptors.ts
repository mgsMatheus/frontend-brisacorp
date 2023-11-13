import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../env";

@Injectable({
  providedIn: "root",
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  /**
   * Verifica se possui a url da api na requisição e caso contrario a url é adicionada
   */
  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      request = request.clone({ url: environment.urlApi + request.url });
    }
    return next.handle(request);
  }
}
