import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthUserService } from "../../core/service/user/auth-user.service";
import { LoginModel } from "../../core/models/users/login.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { AuthTokenService } from "../../infra/services/auth-token.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  public form: FormGroup;
  public typePassword: string = "password";
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authUserService: AuthUserService,
    private authTokenService: AuthTokenService,
    private snackbar: MatSnackBar,
  ) {
    this.form = formBuilder.group({
      login: [
        "",
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(14),
        ],
      ],
      password: ["", [Validators.required]],
    });
  }

  login() {
    this.loading = true;
    let login: LoginModel = this.form.value;
    this.authUserService.execute(login).subscribe({
      next: (response) => {
        this.authTokenService.save(response.token);
      },
      complete: () => {
        this.message("logou");
        this.loading = false;
        this.router.navigate(["/dashboard"]);
      },
      error: (e) => {
        this.message(e.error.message);
        this.loading = false;
      },
    });
  }

  message(message: string) {
    this.snackbar.open(message, "Fechar", {
      duration: 10000,
    });
  }
}
