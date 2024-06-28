import {Component, computed, inject, signal} from '@angular/core';
import {Broker} from "../../../models/broker.interface";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsComponent} from "../products/products/products.component";
import {BrokersService} from "../../shared/api/brokers/brokers.service";
import {SelectBrokerService} from "../../shared/services/select-broker/select-broker.service";
import {RouterLink} from "@angular/router";
import {BrokerProductsService} from "../../shared/api/broker-products/broker-products.service";



@Component({
  selector: 'app-brokers-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ProductsComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './brokers-list.component.html',
  styleUrl: './brokers-list.component.css',
})

export class BrokersListComponent {
  // Services
  brokerService = inject(BrokersService)
  selectBrokerService = inject(SelectBrokerService)
  productService = inject(BrokerProductsService)



  brokers = signal<Broker[]>([])
  currentPage = signal<number>(1)
  pageSize = signal<number>(30)
  products = signal(false)
  activeToggle = signal<boolean>(true)
  query = signal<string>('');
  // TODO search by broker_id
  query_id = signal<number>(0);


  constructor() {
    this.getBrokers().then(() => {
      console.log('Brokers Loaded')
    })
    this.setRss().then()
  }


  logBroker(event: Event, broker: any) {
    event.stopPropagation()
    this.selectBrokerService.setBroker(broker)

  }

  async getBrokers() {
    try {
      const brokers = await this.brokerService.getBrokers()
      this.brokers.set(brokers)
    } catch (err) {
      //   TODO set global error message handling
    } finally {
    }
  }

  async setRss() {
    try {
      // const rss = await this.rssService.getAllRss()
      // this.rssService.set_all_rss(rss)
    } catch (err) {
      console.log('Error getting RSS Emails')
    }
  }


  protected filteredUsers = computed(() => {
      const brokers = this.brokers()?.filter(({name}) =>
        name.toLocaleLowerCase().includes(this.query().toLocaleLowerCase())
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

  protected filteredUsersById = computed(() => {
      const brokers = this.brokers()?.filter(({broker_id}) =>
        broker_id === this.query_id()
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


  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

  updateQueryId() {

  }

  logButtonClick(broker: Broker) {
    this.selectBrokerService.setBroker(broker)
    this.products.set(true)
  }

  getUsersForPage(): Broker[] {
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    if (this.filteredUsers()) {
      return this.filteredUsers()!.slice(startIndex, startIndex + this.pageSize());
    }
    return []
  }

  toggleActive(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.activeToggle.set(!this.activeToggle())
    console.log(this.activeToggle())
  }

}
