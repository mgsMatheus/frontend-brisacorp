import { ConsultModel } from "../../models/consults/consult.model";
import { Observable } from "rxjs";
export abstract class ConsultRepository {
  abstract createConsult(body: ConsultModel): Observable<ConsultModel>;
  abstract getConsults(id: string): Observable<ConsultModel[]>;
}
