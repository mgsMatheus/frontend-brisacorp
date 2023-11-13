import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PatientModel } from "../../../core/models/users/patient.model";
import { CreateUseService } from "../../../core/service/user/create-user.service";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrl: "./register-user.component.scss",
})
export class RegisterUserComponent implements OnInit {
  public form: FormGroup;
  public urlPath: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: CreateUseService,
  ) {
    this.form = formBuilder.group({
      name: ["", [Validators.required]],
      cpf: [""],
      cnpj: [""],
      phone: ["", [Validators.required]],
      password: ["", [Validators.required]],
      emailUser: ["", [Validators.required, Validators.email]],
    });
  }
  ngOnInit(): void {
    this.urlPath =
      this.route.snapshot.routeConfig?.path === undefined
        ? ""
        : this.route.snapshot.routeConfig?.path;
    this.addValidador();
  }

  addValidador() {
    if (this.urlPath === "patient") {
      this.form.controls["cpf"].setValidators([Validators.required]);
      this.form.controls["cnpj"].clearValidators();
    } else {
      this.form.controls["cnpj"].setValidators([Validators.required]);
      this.form.controls["cpf"].clearValidators();
    }
  }

  register() {
    let patient: PatientModel;
    patient = {
      name: this.form.value.name,
      cpf: this.form.value.cpf,
      phone: this.form.value.phone,
      email: this.form.value.emailUser,
      password: this.form.value.password,
    };
    return this.userService.execute(patient).subscribe((response) => {
      console.log(response);
    });
  }
}
