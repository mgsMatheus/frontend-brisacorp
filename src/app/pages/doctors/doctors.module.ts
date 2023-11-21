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
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MY_FORMATS } from "../../shared/const/my_format_date";
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from "@angular/material-moment-adapter";
import { BcInputsDirectiveModule } from "../../shared/directives/bc-inputs-directive/bc-inputs-directive.module";
import { MatChipInputEvent, MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

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
    MatNativeDateModule,
    MatDatepickerModule,
    BcInputsDirectiveModule,
    MatChipsModule,
    MatIconModule,
  ],
  exports: [DoctorsComponent, HoursAvailableComponent, DoctorComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class DoctorsModule {}
