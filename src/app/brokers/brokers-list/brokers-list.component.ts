import {ChangeDetectionStrategy, Component, computed, Input, input, signal} from '@angular/core';
import {Broker} from "../../../models/broker.interface";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-brokers-list',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './brokers-list.component.html',
  styleUrl: './brokers-list.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrokersListComponent {
  brokers = input.required<Broker[]>()
  statustoggle = new FormControl(true)
  currentPage: number = 1; // Current page number (starts at 1)
  pageSize: number = 10; // Number of items per page
  // @Input() brokers!: Broker[]
  logBroker(event: Event, broker: any) {
    event.stopPropagation()
    console.log(broker)
  }


  protected filteredUsers = computed(() => {
    console.log(this.statustoggle.value)
      const allBrokers = this.brokers().filter(({name}) =>
        name.toLocaleLowerCase().startsWith(this.query())
      )
      if (this.statustoggle.value) {
        return allBrokers.filter((broker => {
         return broker.active === true

        }))
      }
      else {
        return allBrokers
      }
    }
  );


  query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

  logButtonClick(broker: Broker) {
    event?.stopPropagation()
    console.log('Buttons Clicked', broker)
  }

  protected readonly Math = Math;

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    const totalPages = Math.ceil(this.filteredUsers().length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }
}
