import { NgModule } from "@angular/core";
import { ConsultRepository } from "./consult.repository";
import { ConsultDataRespository } from "../../data/consult/consult.repository";
@NgModule({
  providers: [{ provide: ConsultRepository, useClass: ConsultDataRespository }],
})
export class ConsultRepositoryModule {}
