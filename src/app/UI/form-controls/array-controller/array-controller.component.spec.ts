import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayControllerComponent } from './array-controller.component';

describe('ArrayControllerComponent', () => {
  let component: ArrayControllerComponent;
  let fixture: ComponentFixture<ArrayControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayControllerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
