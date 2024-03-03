import {Injectable, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";
import {mockBrokers} from "../../../../mockData/mock-broker";

@Injectable({
  providedIn: 'root'
})
export class SelectBrokerService {
  private selectedBroker = signal<Broker>(mockBrokers[0])

  readonly currentBroker = this.selectedBroker.asReadonly()
  setBroker(broker: Broker) {
    this.selectedBroker.set(broker)
  }

  getSelectedBroker(): Broker  {
    return this.currentBroker()
  }


}
