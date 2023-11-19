import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BcTableComponent } from "./bc-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [BcTableComponent],
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  exports: [BcTableComponent],
})
export class BcTableModule {}
