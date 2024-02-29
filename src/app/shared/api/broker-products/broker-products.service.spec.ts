import { TestBed } from '@angular/core/testing';

import { BrokerProductsService } from './broker-products.service';

describe('BrokerProductsService', () => {
  let service: BrokerProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrokerProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
