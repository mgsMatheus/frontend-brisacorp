import { Component, Input } from "@angular/core";

@Component({
  selector: "bc-loading",
  templateUrl: "./bc-loading.component.html",
  styleUrl: "./bc-loading.component.scss",
})
export class BcLoadingComponent {
  @Input() loading: boolean = false;
}
