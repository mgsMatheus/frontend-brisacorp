import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConsultComponent } from "./consult.component";
import { ConsultRoutingModule } from "./consult-routing.module";
import { BcLoadingModule } from "../../../shared/components/bc-loading/bc-loading.module";
import { BcSnackbarModule } from "../../../shared/components/bc-snackbar/bc-snackbar.module";
import { BcTableModule } from "../../../shared/components/bc-table/bc-table.module";
import { BcBasePageModule } from "../../../shared/components/bc-base-page/bc-base-page.module";

@NgModule({
  declarations: [ConsultComponent],
  imports: [
    CommonModule,
    ConsultRoutingModule,
    BcLoadingModule,
    BcSnackbarModule,
    BcTableModule,
    BcBasePageModule,
  ],
  exports: [ConsultComponent],
})
export class ConsultModule {}
