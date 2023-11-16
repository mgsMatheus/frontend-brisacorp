import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashBoardRoutingModule } from "./dashboard-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    BcBasePageModule,
    MatButtonModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
