import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { GetSpeciliastService } from "../../../core/service/hospital/get-specialist.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { GetDateAvailableBySpecialtyService } from "../../../core/service/hospital/get-date-available-by-specialty.service";
import { response } from "express";
import { SpecialistModel } from "../../../core/models/hospitals/specialist.model";
import { GetHourAvailableService } from "../../../core/service/hospital/get-hour-available.service";
import { FilterHourAvailableModel } from "../../../core/models/hospitals/filter-hour-available.model";

@Component({
  selector: "schedule-consults",
  templateUrl: "./schedule-consults.component.html",
  styleUrl: "./schedule-consults.component.scss",
})
export class ScheduleConsultsComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;

  specialties: string[] = [];
  datesAvailables: any[] = [];
  hoursAvailables: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private getSpecialistService: GetSpeciliastService,
    private getDatesBySpecialtyService: GetDateAvailableBySpecialtyService,
    private getHourAvailableService: GetHourAvailableService,
    private snackbar: MatSnackBar,
  ) {
    this.form = formBuilder.group({
      specialty: [""],
      dates: [""],
      hour: [""],
    });
  }

  ngOnInit(): void {
    this.getSpecialist();
  }

  getSpecialist() {
    this.loading = true;
    this.getSpecialistService.execute().subscribe({
      next: (res) => {
        res.forEach((item) => {
          this.specialties.push(item.doctors.specialty);
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

  somethingChanged() {
    this.form.controls["dates"].setValue("");
    this.datesAvailables = [];
    this.form.controls["hour"].setValue("");
    this.hoursAvailables = [];
    if (this.form.value.specialty !== undefined) {
      this.getDatesBySpecialty();
    }
  }

  somethingChangedDates() {
    if (
      this.form.value.specialty !== undefined &&
      this.form.value.dates !== undefined
    ) {
      this.getHourAvailable();
    }
  }

  getDatesBySpecialty() {
    const specialty: SpecialistModel = {
      specialty: this.form.value.specialty,
    };
    this.getDatesBySpecialtyService.execute(specialty).subscribe({
      next: (response) => {
        response.forEach((item) => {
          item.datesDoctors?.forEach((dates) => {
            this.datesAvailables.push(dates.date);
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

  getHourAvailable() {
    const filter: FilterHourAvailableModel = {
      specialty: this.form.value.specialty,
      date: this.form.value.dates,
    };
    this.getHourAvailableService.execute(filter).subscribe({
      next: (response) => {
        response.forEach((item) => {
          item.datesDoctors?.forEach((dates) => {
            dates.hour?.forEach((item) => {
              this.hoursAvailables.push(item);
            });
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
