import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {SelectBrokerService} from "../../../shared/services/select-broker/select-broker.service";


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private selectBrokerService: SelectBrokerService) {
  }
  selectedBroker = this.selectBrokerService.currentBroker
}
