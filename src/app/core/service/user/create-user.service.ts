import { Injectable } from "@angular/core";
import { PatientModel } from "../../models/users/patient.model";
import { UseCase } from "../../base/use-case";
import { UserRepository } from "../../repositories/user/user.repository";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CreateUseService implements UseCase<PatientModel> {
  constructor(private userRespository: UserRepository) {}
  execute(patient: PatientModel): Observable<PatientModel> {
    console.log(patient);
    return this.userRespository.createRegisterPatient(patient);
  }
}
