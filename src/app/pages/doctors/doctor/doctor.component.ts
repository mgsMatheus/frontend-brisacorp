import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CreateDoctorService } from "../../../core/service/hospital/create-doctor.service";
import { FilterDoctorModel } from "../../../core/models/hospitals/filter-doctor.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DoctorsModel } from "../../../core/models/hospitals/doctor.model";

@Component({
  selector: "app-doctor",
  templateUrl: "./doctor.component.html",
  styleUrl: "./doctor.component.scss",
})
export class DoctorComponent {
  public form: FormGroup;
  public loading: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private createDoctorService: CreateDoctorService,
    private snackbar: MatSnackBar,
  ) {
    this.form = this.formBuilder.group({
      name: ["", [Validators.required]],
      specialty: ["", [Validators.required]],
    });
  }

  createDoctor() {
    this.loading = true;
    let params: DoctorsModel = {
      name: this.form.value.name,
      specialty: this.form.value.specialty,
    };
    this.createDoctorService.execute(this.data.hospitalId, params).subscribe({
      next: () => {
        this.message("Medico cadastrado com sucesso");
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
