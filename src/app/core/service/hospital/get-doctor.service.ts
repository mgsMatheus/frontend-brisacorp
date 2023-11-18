import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { DoctorModel } from "../../models/hospitals/doctor.model";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";

@Injectable({
  providedIn: "root",
})
export class GetDoctorService implements UseCase<DoctorModel[]> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(
    hospitalId: string,
    params: FilterDoctorModel,
  ): Observable<DoctorModel[]> {
    return this.hospitalRespository.getDoctors(hospitalId, params);
  }
}
