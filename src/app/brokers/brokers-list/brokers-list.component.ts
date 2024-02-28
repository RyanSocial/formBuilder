import {Component, input} from '@angular/core';
import {Broker} from "../../../models/broker.interface";

@Component({
  selector: 'app-brokers-list',
  standalone: true,
  imports: [],
  templateUrl: './brokers-list.component.html',
  styleUrl: './brokers-list.component.css'
})
export class BrokersListComponent {
  brokers = input.required<Broker[]>()
}
