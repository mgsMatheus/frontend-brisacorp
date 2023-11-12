import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, BcBasePageModule],
  exports: [HomeComponent],
})
export class HomeModule {}
