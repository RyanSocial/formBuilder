import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualInfoComponent } from './visual-info.component';

describe('VisualInfoComponent', () => {
  let component: VisualInfoComponent;
  let fixture: ComponentFixture<VisualInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
