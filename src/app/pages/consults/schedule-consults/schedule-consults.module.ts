import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScheduleConsultsComponent } from "./schedule-consults.component";
import { ScheduleConsultsRoutingModule } from "./schedule-consults-routing.module";
import { BcBasePageModule } from "../../../shared/components/bc-base-page/bc-base-page.module";
import { BcLoadingModule } from "../../../shared/components/bc-loading/bc-loading.module";
import { BcSnackbarModule } from "../../../shared/components/bc-snackbar/bc-snackbar.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { BcTableModule } from "../../../shared/components/bc-table/bc-table.module";
import { ConfirmScheduleComponent } from "./confirm-schedule/confirm-schedule.component";

@NgModule({
  declarations: [ScheduleConsultsComponent, ConfirmScheduleComponent],
  imports: [
    CommonModule,
    ScheduleConsultsRoutingModule,
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
    BcTableModule,
  ],
  exports: [ScheduleConsultsComponent, ConfirmScheduleComponent],
})
export class ScheduleConsultsModule {}
