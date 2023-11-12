import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcBasePageComponent } from "./bc-base-page.component";
import { BcToolbarModule } from "../bc-toolbar/bc-toolbar.module";

@NgModule({
  declarations: [BcBasePageComponent],
  imports: [CommonModule, BcToolbarModule],
  exports: [BcBasePageComponent],
})
export class BcBasePageModule {}
