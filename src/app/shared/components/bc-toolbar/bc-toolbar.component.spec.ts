import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcToolbarComponent } from './bc-toolbar.component';

describe('BcToolbarComponent', () => {
  let component: BcToolbarComponent;
  let fixture: ComponentFixture<BcToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BcToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BcToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
