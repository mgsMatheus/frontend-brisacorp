import { HttpClient } from "@angular/common/http";
import { UserRepository } from "../../repositories/user/user.repository";
import { PatientModel } from "../../models/users/patient.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserDataRespository extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  public createRegisterPatient(patient?: PatientModel) {
    return this.http.post<PatientModel>("/users", patient);
  }
}
