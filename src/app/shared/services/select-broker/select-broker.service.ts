import {Injectable, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";

@Injectable({
  providedIn: 'root'
})
export class SelectBrokerService {
  private selectedBroker = signal<Broker | undefined>(undefined)
  readonly currentBroker = this.selectedBroker.asReadonly()

  setBroker(broker: Broker) {
    this.selectedBroker.set(broker)
  }

  getSelectedBroker(): Broker | undefined {
    return this.currentBroker()
  }


}
