import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PatientsComponent } from "./patients.component";
import { PatientsRoutingModule } from "./patients-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { BcLoadingModule } from "../../shared/components/bc-loading/bc-loading.module";
import { BcSnackbarModule } from "../../shared/components/bc-snackbar/bc-snackbar.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    BcBasePageModule,
    BcLoadingModule,
    BcSnackbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
  ],
  exports: [PatientsComponent],
})
export class PatientsModule {}
