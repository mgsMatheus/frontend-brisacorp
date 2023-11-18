import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcTableComponent } from './bc-table.component';

describe('BcTableComponent', () => {
  let component: BcTableComponent;
  let fixture: ComponentFixture<BcTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BcTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
