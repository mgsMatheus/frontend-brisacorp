import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcSnackbarComponent } from './bc-snackbar.component';

describe('BcSnackbarComponent', () => {
  let component: BcSnackbarComponent;
  let fixture: ComponentFixture<BcSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BcSnackbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
