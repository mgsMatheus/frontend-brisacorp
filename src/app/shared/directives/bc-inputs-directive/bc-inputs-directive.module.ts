import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcMaskDirective } from "./bc-mask.directive";

@NgModule({
  declarations: [BcMaskDirective],
  exports: [BcMaskDirective],
  imports: [CommonModule],
})
export class BcInputsDirectiveModule {}
