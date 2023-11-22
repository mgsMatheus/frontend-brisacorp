import { Component, Inject, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DateAvailableModel } from "../../../../core/models/hospitals/date-available.model";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-hours-availables",
  templateUrl: "./hours-availables.component.html",
  styleUrl: "./hours-availables.component.scss",
})
export class HoursAvailablesComponent implements OnInit {
  columns: any[] = [
    {
      value: "hour",
      describe: "Horas disponiveis",
    },
  ];

  dataTable: MatTableDataSource<DateAvailableModel>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.hours();
  }

  hours() {
    let hoursAvailables: any[] = [];
    this.data.event.hours.forEach((item) => {
      hoursAvailables.push({
        hour: item,
      });
    });

    this.dataTable = new MatTableDataSource(hoursAvailables);
  }
}
