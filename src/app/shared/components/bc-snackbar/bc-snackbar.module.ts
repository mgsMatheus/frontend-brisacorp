import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcSnackbarComponent } from "./bc-snackbar.component";
import { MatButtonModule } from "@angular/material/button";
import {
  MatSnackBar,
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from "@angular/material/snack-bar";

@NgModule({
  declarations: [BcSnackbarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarLabel,
    MatSnackBarActions,
    MatSnackBarAction,
  ],
  exports: [BcSnackbarComponent],
})
export class BcSnackbarModule {}
