import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "patients",
  templateUrl: "./patients.component.html",
  styleUrl: "./patients.component.scss",
})
export class PatientsComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      specialty: [""],
    });
  }

  foods: any[] = ["Steak", "Pizza", "Tacos"];
}
