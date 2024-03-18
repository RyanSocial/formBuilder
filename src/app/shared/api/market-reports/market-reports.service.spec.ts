import { TestBed } from '@angular/core/testing';

import { MarketReportsService } from './market-reports.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

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

  it('should be created', () => {
    expect(marketReportsService).toBeTruthy();
  });
});
