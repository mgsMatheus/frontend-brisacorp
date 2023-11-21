import { DoctorModel, DoctorsModel } from "../../models/hospitals/doctor.model";
import { Observable } from "rxjs";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";
export abstract class HospitalRepository {
  abstract getDoctors(
    hospitalId: string,
    filter: FilterDoctorModel,
  ): Observable<DoctorModel[]>;

  abstract createDoctor(
    hospitalId: string,
    filter: DoctorsModel,
  ): Observable<DoctorModel>;

  abstract getDoctorById(id: string): Observable<DoctorModel[]>;

  abstract getDateAvailable(doctorId: string): Observable<DateAvailableModel[]>;
}
