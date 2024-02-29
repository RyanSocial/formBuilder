import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";
import {InputComponent} from "./UI/form-controls/input/input.component";
import {DropdownComponent} from "./UI/form-controls/dropdown/dropdown.component";
import {BrokersService} from "./shared/api/brokers/brokers.service";
import {Broker} from "../models/broker.interface";
import {BrokersListComponent} from "./brokers/brokers-list/brokers-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  providers: [BrokersService],
  imports: [RouterOutlet, MarketReportComponent, InputComponent, DropdownComponent, BrokersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  brokerList = signal<Broker[]>([])
  constructor(private brokersService: BrokersService) {
    this.brokersService.getBrokers().subscribe({
      next: brokers => {
        console.log('Broker recieved', brokers)
        this.brokerList.set(brokers)}
    })
  }
}
