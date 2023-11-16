import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { ProfileRoutingModule } from "./profile-routing.module";
import { BcBasePageModule } from "../../shared/components/bc-base-page/bc-base-page.module";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { BcSnackbarModule } from "../../shared/components/bc-snackbar/bc-snackbar.module";
import { BcLoadingModule } from "../../shared/components/bc-loading/bc-loading.module";

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    BcBasePageModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    BcSnackbarModule,
    BcLoadingModule,
  ],
  exports: [ProfileComponent],
})
export class ProfileModule {}
