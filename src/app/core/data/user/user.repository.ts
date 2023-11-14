import { HttpClient } from "@angular/common/http";
import { UserRepository } from "../../repositories/user/user.repository";
import { PatientModel } from "../../models/users/patient.model";
import { Injectable } from "@angular/core";
import { HospitalModel } from "../../models/users/hospital.model";

@Injectable()
export class UserDataRespository extends UserRepository {
  constructor(private http: HttpClient) {
    super();
  }

  public createRegisterPatient(patient?: PatientModel) {
    return this.http.post<PatientModel>("/users", patient);
  }

  public createRegisterHospital(hospital?: HospitalModel) {
    return this.http.post<HospitalModel>("/hospitals", hospital);
  }
}
