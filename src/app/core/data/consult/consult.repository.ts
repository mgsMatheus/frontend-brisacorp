import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConsultRepository } from "../../repositories/consult/consult.repository";
import { ConsultModel } from "../../models/consults/consult.model";

@Injectable()
export class ConsultDataRespository extends ConsultRepository {
  constructor(private http: HttpClient) {
    super();
  }

  public getConsults(id: string) {
    return this.http.get<ConsultModel[]>("/consult/" + id);
  }

  public createConsult(body: ConsultModel) {
    return this.http.post<ConsultModel>("/consult", body);
  }
}
