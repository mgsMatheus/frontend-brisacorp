import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DoctorModel, DoctorsModel } from "../../models/hospitals/doctor.model";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";
import { FilterDateAvailableModel } from "../../models/hospitals/filter-date-available.model";
import {
  SpecialistModel,
  SpecialistsModel,
} from "../../models/hospitals/specialist.model";
import { DatesAvailablesBySpecialtyModel } from "../../models/hospitals/dates-availables.model";
import { FilterHourAvailableModel } from "../../models/hospitals/filter-hour-available.model";
import { DoctorsAvailableModel } from "../../models/hospitals/doctors-availables.model";

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

  public createDateAvailable(filters: FilterDateAvailableModel) {
    return this.http.post<DateAvailableModel>("/datesAvailables", filters);
  }

  public deleteDateAvailable(id: string) {
    return this.http.delete<DateAvailableModel>("/datesAvailables/" + id);
  }

  public getSpecialist() {
    return this.http.get<SpecialistsModel[]>("/hospitals/specialty");
  }

  public getDatesBySpecialist(specialty: SpecialistModel) {
    return this.http.get<DatesAvailablesBySpecialtyModel[]>(
      "/hospitals/dates-specialty",
      { params: specialty as any },
    );
  }
  public getHourAvailable(filter: FilterHourAvailableModel) {
    return this.http.get<DatesAvailablesBySpecialtyModel[]>(
      "/hospitals/hours-available",
      { params: filter as any },
    );
  }

  public getDoctorsAvailable(filter: FilterHourAvailableModel) {
    return this.http.get<DoctorsAvailableModel[]>(
      "/datesAvailables/doctors-available",
      { params: filter as any },
    );
  }
}
