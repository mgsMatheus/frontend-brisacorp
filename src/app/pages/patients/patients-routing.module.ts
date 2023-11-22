import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { PatientsComponent } from "./patients.component";

const routes: Routes = [{ path: "", component: PatientsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
