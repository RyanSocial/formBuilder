import { TestBed } from '@angular/core/testing';

import { SelectBrokerService } from './select-broker.service';
import {mockBrokers} from "../../../../mockData/mock-broker";
import {Broker} from "../../../../models/broker.interface";

describe('SelectBrokerService', () => {
  let selectBrokerService: SelectBrokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    selectBrokerService = TestBed.inject(SelectBrokerService);
  });

  it('should be created', () => {
    expect(selectBrokerService).toBeTruthy();
  });

  describe('Set method', () => {
    it('Should set the selected broker', () => {
      const broker: Broker = mockBrokers[0]
      selectBrokerService.setBroker(broker)
      expect(selectBrokerService.getSelectedBroker()).toEqual(broker)
    })
  })
});
