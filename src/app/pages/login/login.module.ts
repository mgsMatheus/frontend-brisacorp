import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { LoginRoutingModule } from "./login-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { BcSnackbarModule } from "../../shared/components/bc-snackbar/bc-snackbar.module";
import { BcLoadingModule } from "../../shared/components/bc-loading/bc-loading.module";
import { BcInputsDirectiveModule } from "../../shared/directives/bc-inputs-directive/bc-inputs-directive.module";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    BcBasePageModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    BcSnackbarModule,
    BcLoadingModule,
    BcInputsDirectiveModule,
  ],
  exports: [LoginComponent],
})
export class LoginModule {}
