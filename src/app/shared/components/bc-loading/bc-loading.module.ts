import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcLoadingComponent } from "./bc-loading.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  declarations: [BcLoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [BcLoadingComponent],
})
export class BcLoadingModule {}
