import {Component} from '@angular/core';
import {MenuLinkInterface} from "../../../../models/menu-link.interface";
import {RouterLink} from "@angular/router";


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
  routes: MenuLinkInterface[] = [{
    name: 'Brokers', linkRef: 'ac-broker-manager',
  },
    {
      name: 'emails', linkRef: 'emails'
    }]
}
