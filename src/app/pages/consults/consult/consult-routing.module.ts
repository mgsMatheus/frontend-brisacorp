import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ConsultComponent } from "./consult.component";

const routes: Routes = [{ path: "", component: ConsultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultRoutingModule {}
