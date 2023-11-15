import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthTokenService } from "../services/auth-token.service";

@Injectable()
export class NoAuthGuard {
  constructor(private authToken: AuthTokenService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    if (!this.authToken.isAuthenticated()) {
      return true;
    }

    this.router.navigateByUrl("/dashboard");
    return false;
  }
}
