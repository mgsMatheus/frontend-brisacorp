import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./infra/guards/auth.guard";
import { NoAuthGuard } from "./infra/guards/no-auth-guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "register",
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import("./pages/register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "login",
    canActivate: [NoAuthGuard],
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/dashboard/dashboard.module").then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: "profile",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "doctors",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/doctors/doctors.module").then((m) => m.DoctorsModule),
  },
  {
    path: "schedule-consult",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import(
        "./pages/consults/schedule-consults/schedule-consults.module"
      ).then((m) => m.ScheduleConsultsModule),
  },
  {
    path: "consult",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./pages/consults/consult/consult.module").then(
        (m) => m.ConsultModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
