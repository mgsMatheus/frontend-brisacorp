import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { DoctorModel } from "../../models/hospitals/doctor.model";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";

@Injectable({
  providedIn: "root",
})
export class GetDoctorByIdService implements UseCase<DoctorModel[]> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(id: string): Observable<DoctorModel[]> {
    return this.hospitalRespository.getDoctorById(id);
  }
}
