import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsRoutingModule } from "./doctors-routing.module";
import { BcTableModule } from "../../shared/components/bc-table/bc-table.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { BcLoadingModule } from "../../shared/components/bc-loading/bc-loading.module";
import { BcSnackbarModule } from "../../shared/components/bc-snackbar/bc-snackbar.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { HoursAvailableComponent } from "./hours-available/hours-available.component";
import { DoctorComponent } from "./doctor/doctor.component";

@NgModule({
  declarations: [DoctorsComponent, HoursAvailableComponent, DoctorComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    BcTableModule,
    BcBasePageModule,
    BcLoadingModule,
    BcSnackbarModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [DoctorsComponent, HoursAvailableComponent, DoctorComponent],
})
export class DoctorsModule {}
