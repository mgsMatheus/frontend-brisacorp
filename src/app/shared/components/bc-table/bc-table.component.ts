import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "bc-table",
  templateUrl: "./bc-table.component.html",
  styleUrl: "./bc-table.component.scss",
})
export class BcTableComponent implements OnInit {
  @Input() columns: any[] = [];
  columnsToDisplay: string[] = [];
  @Input() data = new MatTableDataSource<any>();
  @Output() valuesActions = new EventEmitter();

  ngOnInit(): void {
    let columns: string[] = [];
    this.columns.forEach((item) => columns.push(item.value));
    this.columnsToDisplay = columns.slice();
  }

  valuesAction(event: any) {
    this.valuesActions.emit(event);
  }
}
