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
  describe('marketReportForm', () => {
    it('should create a market Report Form', () => {
      expect(component.questions$.getValue()).not.toBeNull()
    })
    it('Should have a form in the html', () => {
      const htmlForm = fixture.nativeElement.querySelector('form')
      expect(htmlForm)
        .toBeTruthy()
    })
  })
});
