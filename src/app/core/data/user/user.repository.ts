import { HttpClient } from "@angular/common/http";
import { UserRepository } from "../../repositories/user/user.repository";
import { PatientModel } from "../../models/users/patient.model";
import { Injectable } from "@angular/core";
import { HospitalModel } from "../../models/users/hospital.model";
import { Observable } from "rxjs";
import { LoginModel } from "../../models/users/login.model";
import { UserAuthenticatedModel } from "../../models/users/user-authenticated.model";

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
  public authUser(user?: LoginModel): Observable<UserAuthenticatedModel> {
    return this.http.post<UserAuthenticatedModel>("/auth/login", user);
  }

  public mePatient() {
    return this.http.get<PatientModel>("/users/me");
  }
  public meHospital() {
    return this.http.get<HospitalModel>("/hospitals/me");
  }
}
