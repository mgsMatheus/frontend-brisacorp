import { Component, OnInit, forwardRef } from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PatientModel } from "../../../core/models/users/patient.model";
import { CreateUseService } from "../../../core/service/user/create-user.service";
import { CpfValidator } from "../../../shared/validators/cpf.validator";
import { PasswordValidator } from "../../../shared/validators/password.validator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BcSnackbarComponent } from "../../../shared/components/bc-snackbar/bc-snackbar.component";
import { CreateHospitalService } from "../../../core/service/user/hospital-user.service";
import { HospitalModel } from "../../../core/models/users/hospital.model";

@Component({
  selector: "app-register-user",
  templateUrl: "./register-user.component.html",
  styleUrl: "./register-user.component.scss",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RegisterUserComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RegisterUserComponent),
      multi: true,
    },
  ],
})
export class RegisterUserComponent implements OnInit {
  public form: FormGroup;
  public urlPath: string = "";
  public typePassword: string = "text";
  public typeCofirmPassword: string = "text";
  public buttonDisabled: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: CreateUseService,
    private hospitalService: CreateHospitalService,
    private snackbar: MatSnackBar,
  ) {
    this.form = formBuilder.group({
      name: ["", [Validators.required]],
      cpf: [""],
      cnpj: [""],
      phone: ["", [Validators.required, Validators.minLength(10)]],
      password: ["", [Validators.required, PasswordValidator.validate()]],
      passwordConfirm: [
        "",
        [Validators.required, this.matchValues("password")],
      ],
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
      this.form.controls["cpf"].setValidators([
        Validators.required,
        CpfValidator.validate(),
      ]);
      this.form.controls["cnpj"].clearValidators();
    } else {
      this.form.controls["cnpj"].setValidators([
        Validators.required,
        Validators.minLength(14),
      ]);
      this.form.controls["cpf"].clearValidators();
    }
  }

  register() {
    let user: any = null;
    user = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      email: this.form.value.emailUser,
      password: this.form.value.password,
    };

    if (this.urlPath === "patient") {
      user["cpf"] = this.form.value.cpf;
      this.createUserPatient(user);
    } else {
      user["cnpj"] = this.form.value.cnpj;
      this.createUserHospital(user);
    }
  }

  private matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value === control.parent?.value[matchTo]) {
        return null;
      }
      return { passwordNotEqual: true };
    };
  }

  createUserPatient(patient: PatientModel) {
    return this.userService.execute(patient).subscribe({
      complete: () => {
        this.message("criado com sucesso");
      },
      error: (error) => {
        this.message(error.error.message);
      },
    });
  }

  createUserHospital(hospital: HospitalModel) {
    return this.hospitalService.execute(hospital).subscribe({
      complete: () => {
        this.message("criado com sucesso");
      },
      error: (error) => {
        this.message(error.error.message);
      },
    });
  }

  message(message: string) {
    this.snackbar.open(message, "Fechar", {
      duration: 10000,
    });
  }
}
