import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GetDoctorByIdService } from "../../../core/service/hospital/get-doctor-by-id.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatChipInputEvent } from "@angular/material/chips";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { GetDatesAvailablesService } from "../../../core/service/hospital/get-datesAvailables.service";
import { MatTableDataSource } from "@angular/material/table";
import { DateAvailableModel } from "../../../core/models/hospitals/date-available.model";

@Component({
  selector: "app-hours-available",
  templateUrl: "./dates-available.component.html",
  styleUrl: "./dates-available.component.scss",
})
export class DatesAvailableComponent {
  form: FormGroup;
  loading: boolean = false;
  today = new Date();
  hours: string[] = [];
  announcer = inject(LiveAnnouncer);
  columns: any[] = [
    {
      value: "date",
      describe: "Datas disponiveis",
    },
    {
      value: "actions",
      describe: "Horarios disponiveis",
    },
  ];

  dataTable: MatTableDataSource<DateAvailableModel>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getDoctorById: GetDoctorByIdService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    private getDatesAvailablesService: GetDatesAvailablesService,
  ) {
    this.form = formBuilder.group({
      specialty: [""],
      name: [""],
      date: [""],
      hours: [""],
    });
    this.getDoctor();
    this.getDatesAvailables();
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

  getDatesAvailables() {
    this.loading = true;
    this.getDatesAvailablesService.execute(this.data.doctorId).subscribe({
      next: (response) => {
        let datesAvailables: any[] = [];
        response.forEach((item) => {
          datesAvailables.push({
            date: item.date,
            actions: {
              name: "edit_calendar",
              hours: item.hour,
            },
          });
        });

        this.dataTable = new MatTableDataSource(datesAvailables);
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
}
