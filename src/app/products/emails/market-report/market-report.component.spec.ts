import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MarketReportComponent} from './market-report.component';
import {FormGroup} from "@angular/forms";

describe('MarketReportComponent', () => {
  let component: MarketReportComponent;
  let fixture: ComponentFixture<MarketReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketReportComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarketReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
