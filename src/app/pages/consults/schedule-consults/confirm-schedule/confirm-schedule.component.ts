import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MePatientService } from "../../../../core/service/user/me-patient.service";
import { UpdateStatusDateAvailableService } from "../../../../core/service/hospital/update-status-date-available.service";
import { StatusDateAvailableModel } from "../../../../core/models/hospitals/status-date-available.model";
import { response } from "express";
import { CreateConsultService } from "../../../../core/service/consult/create-consult.service";
import { ConsultModel } from "../../../../core/models/consults/consult.model";

@Component({
  selector: "app-confirm-schedule",
  templateUrl: "./confirm-schedule.component.html",
  styleUrl: "./confirm-schedule.component.scss",
})
export class ConfirmScheduleComponent implements OnInit {
  loading: boolean = false;
  userId: string | undefined;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar: MatSnackBar,
    private mePatientService: MePatientService,
    private updateStatusDateService: UpdateStatusDateAvailableService,
    private createConsultService: CreateConsultService,
  ) {}

  ngOnInit(): void {
    this.mePatient();
  }

  mePatient() {
    this.loading = true;
    this.mePatientService.execute().subscribe({
      next: (response) => {
        this.userId = response.id;
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

  updateStatus() {
    this.loading = true;
    let body: StatusDateAvailableModel = {
      status: false,
    };
    this.updateStatusDateService.execute(this.data.event.id, body).subscribe({
      next: () => {
        this.createConsult();
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

  createConsult() {
    this.loading = true;
    let body: ConsultModel = {
      nameDoctor: this.data.event.nameDoctor,
      nameHospital: this.data.event.nameHospital,
      date: this.data.event.date,
      userId: this.userId,
      specialty: this.data.event.specialty,
    };
    this.createConsultService.execute(body).subscribe({
      error: (e) => {
        this.message(e.error.message);
        this.loading = false;
      },
      complete: () => {
        this.message("Consulta agendanda com sucesso");
        this.loading = false;
      },
    });
  }
}
