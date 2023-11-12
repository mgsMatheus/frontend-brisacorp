import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcBasePageComponent } from './bc-base-page.component';

describe('BcBasePageComponent', () => {
  let component: BcBasePageComponent;
  let fixture: ComponentFixture<BcBasePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BcBasePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcBasePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
