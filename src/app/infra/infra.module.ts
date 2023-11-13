import { CommonModule } from "@angular/common";
import { NgModule, Optional, SkipSelf } from "@angular/core";
import lazyServices from "./lazy-services";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiPrefixInterceptor } from "./intercerptors/api-prefix.intercerptors";

@NgModule({
  declarations: [],
  imports: [CommonModule, ...lazyServices],
  providers: [
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
