import {Component, signal} from '@angular/core';
import {MenuLinkInterface} from "../../../../models/menu-link.interface";
import {RouterLink} from "@angular/router";
import {Broker} from "../../../../models/broker.interface";
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

  routes: MenuLinkInterface[] = [{
    name: 'Brokers', linkRef: 'ac-broker-manager',
  },
    {
      name: 'emails', linkRef: 'emails'
    }]
}
