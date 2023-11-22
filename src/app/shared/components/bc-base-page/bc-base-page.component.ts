import { Component, Input, OnInit } from "@angular/core";
import { MePatientService } from "../../../core/service/user/me-patient.service";
import { MeHospitalService } from "../../../core/service/user/me-hospital.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "bc-base-page",
  templateUrl: "./bc-base-page.component.html",
  styleUrl: "./bc-base-page.component.scss",
})
export class BcBasePageComponent implements OnInit {
  @Input() isRegister: boolean = false;
  @Input() isHome: boolean = false;
  public typeUser: string = "";
  public loading: boolean = false;

  constructor(
    private mePatientService: MePatientService,
    private meHospitalService: MeHospitalService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    if (this.isRegister === false && this.isHome === false) {
      this.mePatient();
    }
  }

  mePatient() {
    this.typeUser = "";
    this.loading = true;
    this.mePatientService.execute().subscribe({
      next: () => {
        this.typeUser = "patient";
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
    this.typeUser = "";
    this.loading = true;
    this.meHospitalService.execute().subscribe({
      next: () => {
        this.typeUser = "hospital";
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
