import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcToolbarComponent } from "./bc-toolbar.component";

import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";

@NgModule({
  declarations: [BcToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  exports: [BcToolbarComponent],
})
export class BcToolbarModule {}
