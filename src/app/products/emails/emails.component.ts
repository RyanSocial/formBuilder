import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {Product} from "../../../models/broker-product.interface";
import {SelectBrokerService} from "../../shared/services/select-broker/select-broker.service";
import {FormatProductTitlePipe} from "../../pipes/product/format-product-title.pipe";
import {JsonPipe} from "@angular/common";
import {EmailComponent} from "./email/email/email.component";

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormatProductTitlePipe,
    JsonPipe,
    EmailComponent
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {
  emails = signal<Product[] | undefined>(undefined)
  constructor(private selectBrokerService: SelectBrokerService) {
    this.selectBrokerService.emailProducts$.subscribe({
      next: (value) => {
        this.emails.set(value)
      }
    })
  }

}
