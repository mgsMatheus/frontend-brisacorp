import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DatesAvailableComponent } from "./dates-available.component";

describe("HoursAvailableComponent", () => {
  let component: DatesAvailableComponent;
  let fixture: ComponentFixture<DatesAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatesAvailableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
