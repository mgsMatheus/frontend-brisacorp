import { ConsultRepositoryModule } from "../core/repositories/consult/consult.repository.module";
import { HospitalRepositoryModule } from "../core/repositories/hospital/hospital.repository.module";
import { UserRepositoryModule } from "../core/repositories/user/user.repository.module";

export default [
  UserRepositoryModule,
  HospitalRepositoryModule,
  ConsultRepositoryModule,
];
