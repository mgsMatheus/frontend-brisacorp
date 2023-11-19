import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { DoctorModel, DoctorsModel } from "../../models/hospitals/doctor.model";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";

@Injectable({
  providedIn: "root",
})
export class CreateDoctorService implements UseCase<DoctorModel> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(hospitalId: string, params: DoctorsModel): Observable<DoctorModel> {
    return this.hospitalRespository.createDoctor(hospitalId, params);
  }
}
