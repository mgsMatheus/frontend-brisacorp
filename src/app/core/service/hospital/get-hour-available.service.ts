import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DatesAvailablesBySpecialtyModel } from "../../models/hospitals/dates-availables.model";
import { FilterHourAvailableModel } from "../../models/hospitals/filter-hour-available.model";

@Injectable({
  providedIn: "root",
})
export class GetHourAvailableService
  implements UseCase<DatesAvailablesBySpecialtyModel[]>
{
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(
    filter: FilterHourAvailableModel,
  ): Observable<DatesAvailablesBySpecialtyModel[]> {
    return this.hospitalRespository.getHourAvailable(filter);
  }
}
