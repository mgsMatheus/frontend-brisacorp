import { Component } from "@angular/core";

@Component({
  selector: "app-doctors",
  templateUrl: "./doctors.component.html",
  styleUrl: "./doctors.component.scss",
})
export class DoctorsComponent {
  columns: any[] = [
    {
      value: "name",
      describe: "Nome",
    },
    {
      value: "weight",
      describe: "Nome",
    },
  ];
  data;
  constructor() {
    this.data = [
      {
        position: 1,
        name: "Hydrogen",
        weight: 1.0079,
        symbol: "H",
        actions: "Horarios dsiponiveis",
      },
      {
        position: 2,
        name: "Helium",
        weight: 4.0026,
        symbol: "He",
        actions: false,
      },
      {
        position: 3,
        name: "Lithium",
        weight: 6.941,
        symbol: "Li",
        actions: false,
      },
      {
        position: 4,
        name: "Beryllium",
        weight: 9.0122,
        symbol: "Be",
        actions: false,
      },
      {
        position: 5,
        name: "Boron",
        weight: 10.811,
        symbol: "B",
        actions: false,
      },
      {
        position: 6,
        name: "Carbon",
        weight: 12.0107,
        symbol: "C",
        actions: false,
      },
      {
        position: 7,
        name: "Nitrogen",
        weight: 14.0067,
        symbol: "N",
        actions: false,
      },
      {
        position: 8,
        name: "Oxygen",
        weight: 15.9994,
        symbol: "O",
        actions: false,
      },
      {
        position: 9,
        name: "Fluorine",
        weight: 18.9984,
        symbol: "F",
        actions: false,
      },
      {
        position: 10,
        name: "Neon",
        weight: 20.1797,
        symbol: "Ne",
        actions: false,
      },
    ];
  }
}
