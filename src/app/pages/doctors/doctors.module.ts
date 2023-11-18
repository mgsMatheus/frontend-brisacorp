import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsRoutingModule } from "./doctors-routing.module";
import { BcTableModule } from "../../shared/components/bc-table/bc-table.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";

@NgModule({
  declarations: [DoctorsComponent],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    BcTableModule,
    BcBasePageModule,
  ],
  exports: [DoctorsComponent],
})
export class DoctorsModule {}
