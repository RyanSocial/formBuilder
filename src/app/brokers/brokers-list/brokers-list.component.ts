import {ChangeDetectionStrategy, Component, computed, Input, input, signal} from '@angular/core';
import {Broker} from "../../../models/broker.interface";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsComponent} from "../products/products/products.component";

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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokersListComponent {
  brokers = input.required<Broker[]>()
  currentPage: number = 1; // Current page number (starts at 1)
  pageSize: number = 20; // Number of items per page
  products = signal(false)
  activeToggle = signal<boolean>(true)
  selectedBroker = signal<Broker | undefined>(undefined)


  logBroker(event: Event, broker: any) {
    event.stopPropagation()
    console.log(broker)
  }


  protected filteredUsers = computed(() => {
      this.currentPage = 1
      this.pageSize = 20
      const brokers = this.brokers().filter(({name}) =>
        name.toLocaleLowerCase().startsWith(this.query().toLocaleLowerCase())
      )
      if (this.activeToggle()) {
        return brokers.filter((broker) => {
          return broker.active
        })
      } else {
        return brokers.filter((broker) => {
          return !broker.active
        })
      }

    }
  );

  filterByStatus(brokers: Broker[]) {
    return brokers.filter(broker => broker.active)
  }


  query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

  logButtonClick(broker: Broker) {
    this.selectedBroker.set(broker)
    this.products.set(true)
    event?.stopPropagation()
  }

  protected readonly Math = Math;

  get totalPages(): number {
    return Math.ceil(this.filteredUsers().length / this.pageSize);
  }

  getUsersForPage(): Broker[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredUsers().slice(startIndex, startIndex + this.pageSize);
  }

  onCheckboxChange(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.activeToggle.set(!this.activeToggle())
    console.log(this.activeToggle())
  }

}
