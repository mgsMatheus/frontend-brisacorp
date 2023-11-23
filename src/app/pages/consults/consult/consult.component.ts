import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DoctorsAvailableModel } from "../../../core/models/hospitals/doctors-availables.model";
import { MePatientService } from "../../../core/service/user/me-patient.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { GetConsultService } from "../../../core/service/consult/get-consult.service";

@Component({
  selector: "app-consult",
  templateUrl: "./consult.component.html",
  styleUrl: "./consult.component.scss",
})
export class ConsultComponent implements OnInit {
  loading: boolean = false;
  columns: any[] = [
    {
      value: "date",
      describe: "dia da Consulta",
    },
    {
      value: "nameHospital",
      describe: "Hospital",
    },
    {
      value: "nameDoctor",
      describe: "Medico",
    },
    {
      value: "specialty",
      describe: "Especialidade",
    },
  ];

  dataTable: MatTableDataSource<DoctorsAvailableModel>;
  constructor(
    private mePatientService: MePatientService,
    private getConsultsService: GetConsultService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.mePatient();
  }

  mePatient() {
    this.loading = true;
    this.mePatientService.execute().subscribe({
      next: (response) => {
        this.getConsults(response.id);
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

  getConsults(id: any) {
    this.getConsultsService.execute(id).subscribe({
      next: (res) => {
        let consult: any = [];
        res.forEach((item) =>
          consult.push({
            date: item.date,
            nameHospital: item.nameHospital,
            nameDoctor: item.nameDoctor,
            specialty: item.specialty,
          }),
        );
        this.dataTable = new MatTableDataSource(consult);
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
