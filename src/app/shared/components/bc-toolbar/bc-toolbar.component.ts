import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthTokenService } from "../../../infra/services/auth-token.service";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./bc-toolbar.component.html",
  styleUrl: "./bc-toolbar.component.scss",
})
export class BcToolbarComponent {
  @Input() isRegister: boolean = false;
  @Input() isHome: boolean = false;
  @Input() typeUser: string = "";

  constructor(
    private router: Router,
    private authTokenService: AuthTokenService,
  ) {}

  schedule() {
    this.router.navigate(["schedule-consult"]);
  }

  toRedirect() {
    this.router.navigate(["login"]);
  }

  consults() {
    this.router.navigate(["consult"]);
  }

  logout() {
    this.authTokenService.destroy();
    this.router.navigate(["home"]);
  }

  toRedirectDoctors() {
    this.router.navigate(["doctors"]);
  }

  profile() {
    this.router.navigate(["profile"]);
  }
}
