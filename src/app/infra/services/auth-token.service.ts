import { EventEmitter, Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AuthTokenService {
  private event: EventEmitter<boolean>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.event = new EventEmitter();
  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  public get() {
    if (this.isBrowser()) {
      return localStorage.getItem("authToken");
    }
    return null;
  }

  public isAuthenticated() {
    return !this.isNullOrUndefined(this.get());
  }

  public isNullOrUndefined(value: any) {
    return value === null || value === undefined;
  }

  public save(token: string) {
    if (this.isBrowser()) {
      localStorage.setItem("authToken", token);
      this.event.emit(true);
    }
  }

  public destroy() {
    if (this.isBrowser()) {
      localStorage.removeItem("authToken");
      this.event.emit(false);
    }
  }

  public on() {
    return this.event.asObservable();
  }
}
