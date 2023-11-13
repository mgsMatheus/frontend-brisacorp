import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register.component";
import { RegisterRoutingModule } from "./register-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CreateUseService } from "../../core/service/user/create-user.service";
@NgModule({
  declarations: [RegisterComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    BcBasePageModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [RegisterComponent, RegisterUserComponent],
  providers: [CreateUseService],
})
export class RegisterModule {}
