import { Component, Input } from "@angular/core";

@Component({
  selector: "bc-toolbar",
  templateUrl: "./bc-toolbar.component.html",
  styleUrl: "./bc-toolbar.component.scss",
})
export class BcToolbarComponent {
  @Input() isRegister = false;
}
