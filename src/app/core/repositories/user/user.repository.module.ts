import { NgModule } from "@angular/core";
import { UserRepository } from "./user.repository";
import { UserDataRespository } from "../../data/user/user.repository";
@NgModule({
  providers: [{ provide: UserRepository, useClass: UserDataRespository }],
})
export class UserRepositoryModule {}
