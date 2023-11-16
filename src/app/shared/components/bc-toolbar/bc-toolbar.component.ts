import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthTokenService } from "../../../infra/services/auth-token.service";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./bc-toolbar.component.html",
  styleUrl: "./bc-toolbar.component.scss",
})
export class BcToolbarComponent {
  @Input() isRegister = false;
  @Input() isHome = false;

  constructor(
    private router: Router,
    private authTokenService: AuthTokenService,
  ) {}

  toRedirect() {
    this.router.navigate(["login"]);
  }

  logout() {
    this.authTokenService.destroy();
    this.router.navigate(["home"]);
  }

  profile() {
    this.router.navigate(["profile"]);
  }
}
