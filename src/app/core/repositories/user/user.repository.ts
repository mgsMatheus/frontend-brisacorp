import { PatientModel } from "../../models/users/patient.model";
import { Observable } from "rxjs";
export abstract class UserRepository {
  abstract createRegisterPatient(
    patient?: PatientModel,
  ): Observable<PatientModel>;
}
