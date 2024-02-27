import {Component, computed, input, signal} from '@angular/core';
import {Broker} from "../../../models/broker.interface";

@Component({
  selector: 'app-broker-list',
  standalone: true,
  imports: [],
  templateUrl: './broker-list.component.html',
  styleUrl: './broker-list.component.css'
})
export class BrokerListComponent {
  brokerList = input.required<Broker[]>()

  protected filteredUsers = computed(() =>
    this.brokerList().filter(({name}) =>
      name.startsWith(this.query())
    )
  );
  private query = signal('');

  updateQuery(e: Event) {
    this.query.set((e.target as HTMLInputElement).value);
  }

}
