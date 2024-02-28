import { TestBed } from '@angular/core/testing';

import { SelectBrokerService } from './select-broker.service';

describe('SelectBrokerService', () => {
  let service: SelectBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectBrokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
