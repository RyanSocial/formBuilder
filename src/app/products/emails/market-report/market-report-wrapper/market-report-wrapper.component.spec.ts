import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketReportWrapperComponent } from './market-report-wrapper.component';

describe('MrTestComponent', () => {
  let component: MarketReportWrapperComponent;
  let fixture: ComponentFixture<MarketReportWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReportWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketReportWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
