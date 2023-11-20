import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MeHospitalService } from "../../core/service/user/me-hospital.service";
import { GetDoctorService } from "../../core/service/hospital/get-doctor.service";
import { FilterDoctorModel } from "../../core/models/hospitals/filter-doctor.model";
import { DoctorsModel } from "../../core/models/hospitals/doctor.model";
import { MatTableDataSource } from "@angular/material/table";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { HoursAvailableComponent } from "./hours-available/hours-available.component";
import { DoctorComponent } from "./doctor/doctor.component";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrl: "./doctors.component.scss",
})
export class DoctorsComponent implements OnInit {
  public form: FormGroup;
  public loading: boolean = false;
  public idHospital: any;
  columns: any[] = [
    {
      value: "name",
      describe: "Nome",
    },
    {
      value: "specialty",
      describe: "Especialidade",
    },
    {
      value: "actions",
      describe: "Datas",
    },
  ];
  data: MatTableDataSource<DoctorsModel>;
  constructor(
    private meHospitalService: MeHospitalService,
    private snackbar: MatSnackBar,
    private getDoctorService: GetDoctorService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) {
    this.form = formBuilder.group({
      name: [""],
      specialty: [""],
    });
  }

  ngOnInit() {
    this.getIdHospital();
  }

  getIdHospital() {
    this.loading = true;
    let params: FilterDoctorModel = {
      doctor: "",
      specialty: "",
    };
    this.meHospitalService.execute().subscribe({
      next: (response) => {
        this.idHospital = response.id;
        this.getDoctor(response.id, params);
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

  getDoctor(id: any, params: FilterDoctorModel) {
    this.loading = true;
    this.getDoctorService.execute(id, params).subscribe({
      next: (response) => {
        let doctors: any[] = [];
        response.forEach((item) => {
          doctors.push({
            name: item.doctors.name,
            specialty: item.doctors.specialty,
            actions: {
              name: "edit_calendar",
              id: item.doctors._id,
            },
          });
        });
        this.data = new MatTableDataSource(doctors);
        this.message(doctors.length + " medicos encontrados");
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

  filterDoctor() {
    let params: FilterDoctorModel = {
      doctor: this.form.value.name,
      specialty: this.form.value.specialty,
    };
    this.getDoctor(this.idHospital, params);
  }

  valuesAction(event: any) {
    let ref = this.dialog.open(HoursAvailableComponent, {
      width: "1250px",
      data: {
        doctorId: event.id,
      },
    });
    ref.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openRegisterDoctor() {
    let ref = this.dialog.open(DoctorComponent, {
      width: "570px",
      data: {
        hospitalId: this.idHospital,
      },
    });
    ref.afterClosed().subscribe((result) => {
      if (result === true) {
        this.filterDoctor();
      }
    });
  }
}
