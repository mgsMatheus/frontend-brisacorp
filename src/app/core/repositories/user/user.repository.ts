import { HospitalModel } from "../../models/users/hospital.model";
import { LoginModel } from "../../models/users/login.model";
import { PatientModel } from "../../models/users/patient.model";
import { Observable } from "rxjs";
import { UserAuthenticatedModel } from "../../models/users/user-authenticated.model";
export abstract class UserRepository {
  abstract createRegisterPatient(
    patient?: PatientModel,
  ): Observable<PatientModel>;
  abstract createRegisterHospital(
    hospital?: HospitalModel,
  ): Observable<HospitalModel>;
  abstract authUser(user?: LoginModel): Observable<UserAuthenticatedModel>;
}
