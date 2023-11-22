import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ScheduleConsultsComponent } from "./schedule-consults.component";

const routes: Routes = [{ path: "", component: ScheduleConsultsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleConsultsRoutingModule {}
