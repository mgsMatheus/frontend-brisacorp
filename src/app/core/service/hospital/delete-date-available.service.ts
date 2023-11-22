import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";

@Injectable({
  providedIn: "root",
})
export class DeleteDateAvailableService implements UseCase<DateAvailableModel> {
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(id: string): Observable<DateAvailableModel> {
    return this.hospitalRespository.deleteDateAvailable(id);
  }
}
