import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { HospitalRepository } from "../../repositories/hospital/hospital.repository";
import { DatesAvailablesBySpecialtyModel } from "../../models/hospitals/dates-availables.model";
import { SpecialistModel } from "../../models/hospitals/specialist.model";

@Injectable({
  providedIn: "root",
})
export class GetDateAvailableBySpecialtyService
  implements UseCase<DatesAvailablesBySpecialtyModel[]>
{
  constructor(private hospitalRespository: HospitalRepository) {}
  execute(
    specialty: SpecialistModel,
  ): Observable<DatesAvailablesBySpecialtyModel[]> {
    return this.hospitalRespository.getDatesBySpecialist(specialty);
  }
}
