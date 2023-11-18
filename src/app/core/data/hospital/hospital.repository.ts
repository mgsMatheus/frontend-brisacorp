import { HttpClient } from "@angular/common/http";
import { PatientModel } from "../../models/users/patient.model";
import { Injectable } from "@angular/core";
import { HospitalModel } from "../../models/users/hospital.model";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DoctorModel } from "../../models/hospitals/doctor.model";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";

@Injectable()
export class HospitalDataRespository extends HospitalRepository {
  constructor(private http: HttpClient) {
    super();
  }

  public getDoctors(hospitalId: string, filter: FilterDoctorModel) {
    return this.http.get<DoctorModel[]>(
      "/hospitals/" + hospitalId + "/doctors",
      { params: filter as any },
    );
  }

  public mePatient() {
    return this.http.get<PatientModel>("/users/me");
  }
  public meHospital() {
    return this.http.get<HospitalModel>("/hospitals/me");
  }
}
