import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketReportIframeComponent } from './market-report-iframe.component';

describe('MarketReportIframeComponent', () => {
  let component: MarketReportIframeComponent;
  let fixture: ComponentFixture<MarketReportIframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReportIframeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketReportIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
