import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GetSpeciliastService } from "../../../core/service/hospital/get-specialist.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { GetDateAvailableBySpecialtyService } from "../../../core/service/hospital/get-date-available-by-specialty.service";
import { response } from "express";
import { SpecialistModel } from "../../../core/models/hospitals/specialist.model";
import { GetHourAvailableService } from "../../../core/service/hospital/get-hour-available.service";
import { FilterHourAvailableModel } from "../../../core/models/hospitals/filter-hour-available.model";
import { GetDoctorsAvailableService } from "../../../core/service/hospital/get-doctors-availables.service";
import { DateAvailableModel } from "../../../core/models/hospitals/date-available.model";
import { MatTableDataSource } from "@angular/material/table";
import { DoctorsAvailableModel } from "../../../core/models/hospitals/doctors-availables.model";

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
  columns: any[] = [
    {
      value: "nameHospital",
      describe: "Hospital",
    },
    {
      value: "name",
      describe: "Medico",
    },
    {
      value: "actions",
      describe: "Agendar",
    },
  ];

  dataTable: MatTableDataSource<DoctorsAvailableModel>;

  constructor(
    private formBuilder: FormBuilder,
    private getSpecialistService: GetSpeciliastService,
    private getDatesBySpecialtyService: GetDateAvailableBySpecialtyService,
    private getHourAvailableService: GetHourAvailableService,
    private getDoctorsAvailableService: GetDoctorsAvailableService,
    private snackbar: MatSnackBar,
  ) {
    this.form = formBuilder.group({
      specialty: ["", [Validators.required]],
      dates: ["", [Validators.required]],
      hour: ["", [Validators.required]],
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
    this.form.controls["hour"].setValue("");
    this.hoursAvailables = [];
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

  getDoctorAvailable() {
    this.loading = true;
    const filter: FilterHourAvailableModel = {
      specialty: this.form.value.specialty,
      date: this.form.value.dates,
    };
    this.getDoctorsAvailableService.execute(filter).subscribe({
      next: (response) => {
        let doctorsAvailables: any = [];
        response.forEach((item) => {
          item.datesDoctors.forEach((hospital) => {
            hospital.doctors.find((doctor) => {
              if (doctor._id === item._idDoctor) {
                doctorsAvailables.push({
                  name: doctor.name,
                  nameHospital: hospital.name,
                  actions: {
                    name: "schedule",
                    id: item._id,
                  },
                });
              }

              this.dataTable = new MatTableDataSource(doctorsAvailables);
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

  getDateAvailableId(event) {
    console.log(event);
  }

  message(message: string) {
    this.snackbar.open(message, "Fechar", {
      duration: 10000,
    });
  }
}
