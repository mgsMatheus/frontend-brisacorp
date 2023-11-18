import { DoctorModel } from "../../models/hospitals/doctor.model";
import { Observable } from "rxjs";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";
export abstract class HospitalRepository {
  abstract getDoctors(
    hospitalId: string,
    filter: FilterDoctorModel,
  ): Observable<DoctorModel[]>;
}
