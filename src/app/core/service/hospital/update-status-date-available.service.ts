import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";
import { StatusDateAvailableModel } from "../../models/hospitals/status-date-available.model";

@Injectable({
  providedIn: "root",
})
export class UpdateStatusDateAvailableService
  implements UseCase<DateAvailableModel>
{
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(
    id: string,
    body: StatusDateAvailableModel,
  ): Observable<DateAvailableModel> {
    return this.hospitalRespository.updateStatusDateAvailables(id, body);
  }
}
