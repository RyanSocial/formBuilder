import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";
import {InputComponent} from "./UI/form-controls/input/input.component";
import {DropdownComponent} from "./UI/form-controls/dropdown/dropdown.component";
import {BrokersService} from "./shared/api/brokers.service";
import {Broker} from "../models/broker.interface";



@Component({
  selector: 'app-root',
  standalone: true,
  providers: [BrokersService],
  imports: [RouterOutlet, MarketReportComponent, InputComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  brokers = signal<Broker[] | undefined>([])
  showDefer = signal<boolean>(false)

  constructor(private brokersService: BrokersService) {
    this.brokersService.getBrokers().subscribe({
      next: brokers => this.brokers.set(brokers)
    })
setTimeout(() => {
  this.showDefer.set(true)
},3000)
  }

  setDefer() {
    this.showDefer.set(true)
  }


}
