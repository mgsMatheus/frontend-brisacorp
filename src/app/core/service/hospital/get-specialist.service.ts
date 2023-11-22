import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { SpecialistsModel } from "../../models/hospitals/specialist.model";

@Injectable({
  providedIn: "root",
})
export class GetSpeciliastService implements UseCase<SpecialistsModel[]> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(): Observable<SpecialistsModel[]> {
    return this.hospitalRespository.getSpecialist();
  }
}
