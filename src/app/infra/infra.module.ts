import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import lazyServices from "./lazy-services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiPrefixInterceptor } from "./intercerptors/api-prefix.intercerptors";
import { AuthTokenService } from "./services/auth-token.service";
import { AuthGuard } from "./guards/auth.guard";
import { NoAuthGuard } from "./guards/no-auth-guard";

@NgModule({
  declarations: [],
  imports: [CommonModule, ...lazyServices],
  providers: [
    AuthTokenService,
    AuthGuard,
    NoAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
  ],
})
export class InfraModule {
  constructor(@Optional() @SkipSelf() parentModule: InfraModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} já foi carregado. A importação deve ser feita apenas no AppModule.`,
      );
    }
  }
}
