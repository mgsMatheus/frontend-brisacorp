import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "schedule-consults",
  templateUrl: "./schedule-consults.component.html",
  styleUrl: "./schedule-consults.component.scss",
})
export class ScheduleConsultsComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      specialty: [""],
    });
  }

  foods: any[] = ["Steak", "Pizza", "Tacos"];
}
