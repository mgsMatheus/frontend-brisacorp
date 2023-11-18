import { Component, OnInit } from "@angular/core";
import { MePatientService } from "../../core/service/user/me-patient.service";
import { error } from "console";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MeHospitalService } from "../../core/service/user/me-hospital.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;
  constructor(
    private mePatientService: MePatientService,
    private meHospitalService: MeHospitalService,
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,
  ) {
    this.form = formBuilder.group({
      cpf: [""],
      name: [""],
      phone: [""],
      email: [""],
    });
  }

  ngOnInit(): void {
    this.mePatient();
  }

  mePatient() {
    this.loading = true;
    this.mePatientService.execute().subscribe({
      next: (response) => {
        this.form.patchValue({
          cpf: response.cpf,
          name: response.name,
          email: response.email,
          phone: response.phone,
        });
      },
      error: (e) => {
        if (e.error.message == "Usuario não encontrado") {
          this.meHospital();
        } else {
          this.message(e.error.message);
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  meHospital() {
    this.loading = true;
    this.meHospitalService.execute().subscribe({
      next: (response) => {
        this.form.patchValue({
          cpf: response.cnpj,
          name: response.name,
          email: response.email,
          phone: response.phone,
        });
      },
      error: (e) => {
        this.message(e.error.message);
        this.loading = false;
      },
      complete: () => {
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
