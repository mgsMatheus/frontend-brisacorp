import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { UserRepository } from "../../repositories/user/user.repository";
import { Observable } from "rxjs";
import { HospitalModel } from "../../models/users/hospital.model";

@Injectable({
  providedIn: "root",
})
export class MeHospitalService implements UseCase<HospitalModel> {
  constructor(private userRespository: UserRepository) {}
  execute(): Observable<HospitalModel> {
    return this.userRespository.meHospital();
  }
}
