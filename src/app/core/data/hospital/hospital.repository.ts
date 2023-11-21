import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DoctorModel, DoctorsModel } from "../../models/hospitals/doctor.model";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";

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

  public createDoctor(hospitalId: string, filter: DoctorsModel) {
    return this.http.post<DoctorModel>(
      "/hospitals/" + hospitalId + "/doctor",
      filter,
    );
  }

  public getDoctorById(id: string) {
    return this.http.get<DoctorModel[]>("/hospitals/doctor/" + id);
  }

  public getDateAvailable(doctorId: string) {
    return this.http.get<DateAvailableModel[]>("/datesAvailables/" + doctorId);
  }
}
