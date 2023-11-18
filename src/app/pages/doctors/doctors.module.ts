import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsRoutingModule } from "./doctors-routing.module";
import { BcTableModule } from "../../shared/components/bc-table/bc-table.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { BcLoadingModule } from "../../shared/components/bc-loading/bc-loading.module";
import { BcSnackbarModule } from "../../shared/components/bc-snackbar/bc-snackbar.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DoctorsComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    BcTableModule,
    BcBasePageModule,
    BcLoadingModule,
    BcSnackbarModule,
    MatButtonModule,
  ],
  exports: [DoctorsComponent],
})
export class DoctorsModule {}
