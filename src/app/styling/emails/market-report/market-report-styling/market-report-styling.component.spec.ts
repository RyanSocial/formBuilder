import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketReportStylingComponent } from './market-report-styling.component';

describe('MarketReportStylingComponent', () => {
  let component: MarketReportStylingComponent;
  let fixture: ComponentFixture<MarketReportStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReportStylingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketReportStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
