import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./bc-toolbar.component.html",
  styleUrl: "./bc-toolbar.component.scss",
})
export class BcToolbarComponent {
  @Input() isRegister = false;
  @Input() isHome = false;

  constructor(private router: Router) {}

  toRedirect() {
    this.router.navigate(["login"]);
  }
}
