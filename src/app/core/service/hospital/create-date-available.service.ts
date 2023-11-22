import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";
import { FilterDateAvailableModel } from "../../models/hospitals/filter-date-available.model";

@Injectable({
  providedIn: "root",
})
export class CreateDateAvailableService implements UseCase<DateAvailableModel> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(filter: FilterDateAvailableModel): Observable<DateAvailableModel> {
    return this.hospitalRespository.createDateAvailable(filter);
  }
}
