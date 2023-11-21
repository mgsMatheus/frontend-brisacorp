import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GetDoctorByIdService } from "../../../core/service/hospital/get-doctor-by-id.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatChipInputEvent } from "@angular/material/chips";
import { LiveAnnouncer } from "@angular/cdk/a11y";

@Component({
  selector: "app-hours-available",
  templateUrl: "./hours-available.component.html",
  styleUrl: "./hours-available.component.scss",
})
export class HoursAvailableComponent {
  form: FormGroup;
  loading: boolean = false;
  today = new Date();
  hours: string[] = [];
  announcer = inject(LiveAnnouncer);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getDoctorById: GetDoctorByIdService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
  ) {
    this.form = formBuilder.group({
      specialty: [""],
      name: [""],
      date: [""],
      hours: [""],
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

  removeHour(hour: string) {
    const index = this.hours.indexOf(hour);
    if (index >= 0) {
      this.hours.splice(index, 1);

      this.announcer.announce(`removed ${hour}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || "").trim();

    // Add our keyword
    if (value) {
      this.hours.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }
}
