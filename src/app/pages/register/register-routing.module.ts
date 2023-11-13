import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { RegisterUserComponent } from "./register-user/register-user.component";

const routes: Routes = [
  { path: "", component: RegisterComponent },
  { path: "patient", component: RegisterUserComponent },
  { path: "hospital", component: RegisterUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
