import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcBasePageComponent } from "./bc-base-page.component";
import { BcToolbarModule } from "../bc-toolbar/bc-toolbar.module";
import { BcSnackbarModule } from "../bc-snackbar/bc-snackbar.module";
import { BcLoadingModule } from "../bc-loading/bc-loading.module";

@NgModule({
  declarations: [BcBasePageComponent],
  imports: [CommonModule, BcToolbarModule, BcSnackbarModule, BcLoadingModule],
  exports: [BcBasePageComponent],
})
export class BcBasePageModule {}
