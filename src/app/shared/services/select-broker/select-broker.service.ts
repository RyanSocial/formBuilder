import {Injectable, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";
import {mockBrokers} from "../../../../mockData/mock-broker";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../../../models/broker-product.interface";

@Injectable({
  providedIn: 'root'
})
export class SelectBrokerService {
  private selectedBroker = signal<Broker>(mockBrokers[0])

  private emailProducts = new BehaviorSubject<Product[] | undefined>(undefined)
  emailProducts$ = this.emailProducts as Observable<Product[]>

  readonly currentBroker = this.selectedBroker.asReadonly()

  setBroker(broker: Broker) {
    this.selectedBroker.set(broker)
  }

  getSelectedBroker(): Broker {
    return this.currentBroker()
  }

  updateEmails(emails: Product[] | undefined): void {
    this.emailProducts.next(emails)
  }


}
