import { DoctorModel, DoctorsModel } from "../../models/hospitals/doctor.model";
import { Observable } from "rxjs";
import { FilterDoctorModel } from "../../models/hospitals/filter-doctor.model";
import { DateAvailableModel } from "../../models/hospitals/date-available.model";
import { FilterDateAvailableModel } from "../../models/hospitals/filter-date-available.model";
import {
  SpecialistModel,
  SpecialistsModel,
} from "../../models/hospitals/specialist.model";
import { DatesAvailablesBySpecialtyModel } from "../../models/hospitals/dates-availables.model";
import { FilterHourAvailableModel } from "../../models/hospitals/filter-hour-available.model";
import { DoctorsAvailableModel } from "../../models/hospitals/doctors-availables.model";
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

  abstract createDateAvailable(
    filters: FilterDateAvailableModel,
  ): Observable<DateAvailableModel>;

  abstract deleteDateAvailable(id: string): Observable<DateAvailableModel>;

  abstract getSpecialist(): Observable<SpecialistsModel[]>;

  abstract getDatesBySpecialist(
    specialty: SpecialistModel,
  ): Observable<DatesAvailablesBySpecialtyModel[]>;

  abstract getHourAvailable(
    filter: FilterHourAvailableModel,
  ): Observable<DatesAvailablesBySpecialtyModel[]>;

  abstract getDoctorsAvailable(
    filter: FilterHourAvailableModel,
  ): Observable<DoctorsAvailableModel[]>;
}
