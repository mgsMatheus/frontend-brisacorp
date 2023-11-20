import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GetDoctorByIdService } from "../../../core/service/hospital/get-doctor-by-id.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-hours-available",
  templateUrl: "./hours-available.component.html",
  styleUrl: "./hours-available.component.scss",
})
export class HoursAvailableComponent {
  form: FormGroup;
  loading: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getDoctorById: GetDoctorByIdService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group({
      specialty: [""],
      name: [""],
    });
    this.getDoctor();
  }

  getDoctor() {
    this.loading = true;
    this.getDoctorById.execute(this.data.doctorId).subscribe({
      next: (response) => {
        response.forEach((item) => {
          this.form.patchValue({
            specialty: item.doctors.specialty,
            name: item.doctors.name,
          });
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
