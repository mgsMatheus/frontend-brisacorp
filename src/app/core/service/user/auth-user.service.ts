import { Injectable } from "@angular/core";
import { PatientModel } from "../../models/users/patient.model";
import { UseCase } from "../../base/use-case";
import { UserRepository } from "../../repositories/user/user.repository";
import { Observable } from "rxjs";
import { LoginModel } from "../../models/users/login.model";
import { UserAuthenticatedModel } from "../../models/users/user-authenticated.model";

@Injectable({
  providedIn: "root",
})
export class AuthUserService implements UseCase<UserAuthenticatedModel> {
  constructor(private userRespository: UserRepository) {}
  execute(user: LoginModel): Observable<UserAuthenticatedModel> {
    return this.userRespository.authUser(user);
  }
}
