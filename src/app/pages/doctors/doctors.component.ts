import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MeHospitalService } from "../../core/service/user/me-hospital.service";
import { GetDoctorService } from "../../core/service/hospital/get-doctor.service";
import { FilterDoctorModel } from "../../core/models/hospitals/filter-doctor.model";
import { DoctorsModel } from "../../core/models/hospitals/doctor.model";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrl: "./doctors.component.scss",
})
export class DoctorsComponent implements OnInit {
  public loading: boolean = false;
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
      describe: "",
    },
  ];
  data: MatTableDataSource<DoctorsModel>;
  constructor(
    private meHospitalService: MeHospitalService,
    private snackbar: MatSnackBar,
    private getDoctorService: GetDoctorService,
  ) {}

  ngOnInit() {
    this.getIdHospital();
  }

  async getIdHospital() {
    this.loading = true;
    let params: FilterDoctorModel = {
      doctor: "",
      specialty: "",
    };
    this.meHospitalService.execute().subscribe({
      next: (response) => {
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

  async getDoctor(id: any, params: FilterDoctorModel) {
    this.loading = true;
    await this.getDoctorService.execute(id, params).subscribe({
      next: (response) => {
        let doctors: any[] = [];
        response.forEach((item) => {
          doctors.push({
            name: item.doctors.name,
            specialty: item.doctors.specialty,
            actions: {
              name: "Horario",
              id: item.id,
            },
          });
        });
        this.data = new MatTableDataSource(doctors);
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
