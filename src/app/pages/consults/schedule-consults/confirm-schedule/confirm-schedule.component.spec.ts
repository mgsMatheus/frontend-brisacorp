import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmScheduleComponent } from './confirm-schedule.component';

describe('ConfirmScheduleComponent', () => {
  let component: ConfirmScheduleComponent;
  let fixture: ComponentFixture<ConfirmScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
