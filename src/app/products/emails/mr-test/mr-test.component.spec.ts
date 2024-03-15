import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrTestComponent } from './mr-test.component';

describe('MrTestComponent', () => {
  let component: MrTestComponent;
  let fixture: ComponentFixture<MrTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MrTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
