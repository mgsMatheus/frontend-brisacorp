import { NgModule } from "@angular/core";
import { HospitalRepository } from "./hospital.repository";
import { HospitalDataRespository } from "../../data/hospital/hospital.repository";
@NgModule({
  providers: [
    { provide: HospitalRepository, useClass: HospitalDataRespository },
  ],
})
export class HospitalRepositoryModule {}
