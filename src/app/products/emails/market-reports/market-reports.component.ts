import {Component, inject} from '@angular/core';
import {ToggleSpinnerService} from "../../../shared/services/spinner/toggle-spinner.service";
import {BrokersService} from "../../../shared/api/brokers/brokers.service";

@Component({
  selector: 'app-market-reports',
  standalone: true,
  imports: [],
  templateUrl: './market-reports.component.html',
  styleUrl: './market-reports.component.css'
})
export class MarketReportsComponent {
  toggleService = inject(ToggleSpinnerService)
  brokerService = inject(BrokersService)

  constructor() {
    this.getBrokers().then(() => {
      console.log('Brokers Loaded')
    })
  }

  async getBrokers() {
    this.toggleService.setToggle()
    try {
      const brokers = await this.brokerService.getBrokers()
      console.log(brokers)
    } catch (err) {
      //   TODO set global error message handling
    } finally {
      this.toggleService.setToggle()
    }
  }
}
