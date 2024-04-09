import {TestBed} from '@angular/core/testing';

import {MarketReportsService} from './market-reports.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Report} from "../../../../models/market-report.interface";

describe('MarketReportsService', () => {
  let marketReportsService: MarketReportsService;
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarketReportsService]
    });
    marketReportsService = TestBed.inject(MarketReportsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });
  afterEach(() => {
    httpTestingController.verify();
    jest.resetAllMocks();
  })

  it('should be created', () => {
    expect(marketReportsService).toBeTruthy();
  });
  describe('Service Logic', () => {
    it('Should check which report API to  call', () => {
      jest.spyOn(marketReportsService, 'getMarketReports')
      marketReportsService.checkReportType('MARKET_REPORT_EMAIL');
      expect(marketReportsService.getMarketReports).toHaveBeenCalled()
    })
  })
  describe('Report API calls', () => {
    describe('Market Reports', () => {
      it('Should return array of market Reports', () => {
        let marketReports: Report[] | undefined
        marketReportsService.getMarketReports(734).subscribe(
          {
            next: value => {
              console.log('Value', value)
              marketReports = value
            }
          }
        )
        const req = httpTestingController.expectOne('https://vhagar.autochartist.com:8080/api/products/market-reports/broker-market-report/?brokerId=734')
        req.flush([{report_id: 1}])
        expect(marketReports).toEqual([{report_id:1}])
      })
    })
  })
});
