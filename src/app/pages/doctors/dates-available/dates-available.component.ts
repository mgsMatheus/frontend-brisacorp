import { Component, Inject, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material/dialog";
import { GetDoctorByIdService } from "../../../core/service/hospital/get-doctor-by-id.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatChipInputEvent } from "@angular/material/chips";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { GetDatesAvailablesService } from "../../../core/service/hospital/get-datesAvailables.service";
import { MatTableDataSource } from "@angular/material/table";
import { DateAvailableModel } from "../../../core/models/hospitals/date-available.model";
import { HoursAvailablesComponent } from "./hours-availables/hours-availables.component";
import { FilterDateAvailableModel } from "../../../core/models/hospitals/filter-date-available.model";
import moment from "moment";
import { CreateDateAvailableService } from "../../../core/service/hospital/create-date-available.service";
import { DeleteDateAvailableService } from "../../../core/service/hospital/delete-date-available.service";

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
    {
      value: "delete",
      describe: "Excluir",
    },
  ];

  dataTable: MatTableDataSource<DateAvailableModel>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private getDoctorById: GetDoctorByIdService,
    private snackbar: MatSnackBar,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private getDatesAvailablesService: GetDatesAvailablesService,
    private createDatesAvailablesService: CreateDateAvailableService,
    private deleteDatesAvailablesService: DeleteDateAvailableService,
  ) {
    this.form = formBuilder.group({
      specialty: [""],
      name: [""],
      date: ["", [Validators.required]],
      hours: ["", [Validators.required]],
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
              name: "schedule",
              hours: item.hour,
              date: item.date,
            },
            delete: {
              id: item._id,
            },
          });
        });

        this.dataTable = new MatTableDataSource(datesAvailables);
        this.message(datesAvailables.length + " datas disponiveis");
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

  valuesAction(event: any) {
    this.dialog.open(HoursAvailablesComponent, {
      width: "650px",
      autoFocus: false,
      disableClose: true,
      data: {
        event,
      },
    });
  }

  disabledButton() {
    if (this.form.invalid || this.hours.length === 0) {
      return true;
    }
    return false;
  }

  createDateAvailable() {
    let body: FilterDateAvailableModel;
    let date = moment(this.form.value.date).format("DD/MM/YYYY");
    body = {
      doctorId: this.data.doctorId,
      date: date,
      hour: this.hours,
    };
    this.loading = true;
    this.createDatesAvailablesService.execute(body).subscribe({
      next: () => {
        this.getDatesAvailables();
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

  deleteDateAvailable(event: any) {
    this.loading = true;
    this.deleteDatesAvailablesService.execute(event.id).subscribe({
      next: () => {
        this.getDatesAvailables();
      },
      error: (e) => {
        this.message(e.error.message);
        this.loading = false;
      },
      complete: () => {
        this.message("deletado com suceso");
        this.loading = false;
      },
    });
  }
}
