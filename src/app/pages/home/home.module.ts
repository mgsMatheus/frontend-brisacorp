import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BcBasePageModule,
    MatButtonModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
