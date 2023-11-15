import { Component, Input } from "@angular/core";

@Component({
  selector: "bc-base-page",
  templateUrl: "./bc-base-page.component.html",
  styleUrl: "./bc-base-page.component.scss",
})
export class BcBasePageComponent {
  @Input() isRegister = false;
  @Input() isHome = false;
}
