import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursAvailablesComponent } from './hours-availables.component';

describe('HoursAvailablesComponent', () => {
  let component: HoursAvailablesComponent;
  let fixture: ComponentFixture<HoursAvailablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HoursAvailablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoursAvailablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
