import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ScheduleConsultsComponent } from "./schedule-consults.component";

describe("PatientsComponent", () => {
  let component: ScheduleConsultsComponent;
  let fixture: ComponentFixture<ScheduleConsultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScheduleConsultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleConsultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
