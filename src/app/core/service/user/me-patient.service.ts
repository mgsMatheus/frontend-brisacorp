import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { UserRepository } from "../../repositories/user/user.repository";
import { Observable } from "rxjs";
import { PatientModel } from "../../models/users/patient.model";

@Injectable({
  providedIn: "root",
})
export class MePatientService implements UseCase<PatientModel> {
  constructor(private userRespository: UserRepository) {}
  execute(): Observable<PatientModel> {
    return this.userRespository.mePatient();
  }
}
