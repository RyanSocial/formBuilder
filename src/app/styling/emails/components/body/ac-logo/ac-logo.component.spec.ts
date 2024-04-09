import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcLogoComponent } from './ac-logo.component';

describe('AcLogoComponent', () => {
  let component: AcLogoComponent;
  let fixture: ComponentFixture<AcLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
