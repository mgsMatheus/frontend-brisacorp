import { Injectable } from "@angular/core";
import { UseCase } from "../../base/use-case";
import { Observable } from "rxjs";
import { ConsultModel } from "../../models/consults/consult.model";
import { ConsultRepository } from "../../repositories/consult/consult.repository";

@Injectable({
  providedIn: "root",
})
export class CreateConsultService implements UseCase<ConsultModel> {
  constructor(private consultRepository: ConsultRepository) {}
  execute(body: ConsultModel): Observable<ConsultModel> {
    return this.consultRepository.createConsult(body);
  }
}
