import { Component, inject } from "@angular/core";
import { MatSnackBarRef } from "@angular/material/snack-bar";

@Component({
  selector: "app-bc-snackbar",
  templateUrl: "./bc-snackbar.component.html",
  styleUrl: "./bc-snackbar.component.scss",
})
export class BcSnackbarComponent {
  snackBarRef = inject(MatSnackBarRef);
}
