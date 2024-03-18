import {ChangeDetectionStrategy, Component, computed, Input, input, signal} from '@angular/core';
import {Broker} from "../../../models/broker.interface";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsComponent} from "../products/products/products.component";
import {ViewportScroller} from "@angular/common";
import {BrokersService} from "../../shared/api/brokers/brokers.service";
import {SelectBrokerService} from "../../shared/services/select-broker/select-broker.service";
import {MessageService} from "../../shared/services/message/message.service";


@Component({
  selector: 'app-brokers-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProductsComponent,
    FormsModule
  ],
  templateUrl: './brokers-list.component.html',
  styleUrl: './brokers-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokersListComponent {
  brokers = this.brokersService.brokerSignal
  currentPage = signal<number>(1)
  pageSize = signal<number>(30)
  products = signal(false)
  activeToggle = signal<boolean>(true)


  constructor(
    private brokersService: BrokersService,
    private scroller: ViewportScroller,
    private selectBrokerService: SelectBrokerService,
    private messageService: MessageService
  ) {
  }

  simulateMessage() {
    this.messageService.updateMessage({text: 'Error', type: "FetchingData"})
  }

  logBroker(event: Event, broker: any) {
    event.stopPropagation()
    this.selectBrokerService.setBroker(broker)

  }


  protected filteredUsers = computed(() => {

      const brokers = this.brokers()?.filter(({name}) =>
        name.toLocaleLowerCase().startsWith(this.query().toLocaleLowerCase())
      )
      if (this.activeToggle()) {
        return brokers?.filter((broker) => {
          return broker.active || null
        })
      } else {
        return brokers?.filter((broker) => {
          return !broker.active
        })
      }

    }
  );


  query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

  logButtonClick(broker: Broker) {
    this.selectBrokerService.setBroker(broker)
    this.products.set(true)
    event?.stopPropagation()

  }

  protected readonly Math = Math;


  getUsersForPage(): Broker[] {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    if (this.filteredUsers()) {
      return this.filteredUsers()!.slice(startIndex, startIndex + this.pageSize());
    }
    return []

  }

  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.activeToggle.set(!this.activeToggle())
    console.log(this.activeToggle())
  }

}
