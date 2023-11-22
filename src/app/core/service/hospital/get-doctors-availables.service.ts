import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DatesAvailablesBySpecialtyModel } from "../../models/hospitals/dates-availables.model";
import { FilterHourAvailableModel } from "../../models/hospitals/filter-hour-available.model";
import { DoctorsAvailableModel } from "../../models/hospitals/doctors-availables.model";

@Injectable({
  providedIn: "root",
})
export class GetDoctorsAvailableService
  implements UseCase<DoctorsAvailableModel[]>
{
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(
    filter: FilterHourAvailableModel,
  ): Observable<DoctorsAvailableModel[]> {
    return this.hospitalRespository.getDoctorsAvailable(filter);
  }
}
