import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "bc-table",
  templateUrl: "./bc-table.component.html",
  styleUrl: "./bc-table.component.scss",
})
export class BcTableComponent implements OnInit {
  @Input() columns: any[] = [];
  columnsToDisplay: string[] = [];
  @Input() data: any[] = [];

  ngOnInit(): void {
    let columns: string[] = [];
    this.columns.forEach((item) => columns.push(item.value));
    this.columnsToDisplay = columns.slice();
  }
}
