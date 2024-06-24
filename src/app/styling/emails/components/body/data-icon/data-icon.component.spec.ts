import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataIconComponent } from './data-icon.component';

describe('DataIconComponent', () => {
  let component: DataIconComponent;
  let fixture: ComponentFixture<DataIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
