import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {Product} from "../../../models/broker-product.interface";
import {SelectBrokerService} from "../../shared/services/select-broker/select-broker.service";
import {FormatProductTitlePipe} from "../../pipes/product/format-product-title.pipe";
import {MarketReportsService} from "../../shared/api/market-reports/market-reports.service";
import {JsonPipe} from "@angular/common";
import {filter, map, tap} from "rxjs";

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormatProductTitlePipe,
    JsonPipe
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {
  emails = signal<Product[] | undefined>(undefined)
  marketReports = signal({})
  constructor(private selectBrokerService: SelectBrokerService,private marketReportsService :MarketReportsService) {
    this.selectBrokerService.emailProducts$.subscribe({
      next: (value) => {
        this.emails.set(value)
      }
    })
    this.marketReportsService.getMarketReports(734)
      .pipe(
        filter(response => response['modules']), // Keep your filter
        map(response => response['modules']),
        map( response => response['mr'])
      )
      .subscribe(modules => {
        console.log(modules); // This will now log only the 'modules' array
      });

  }

}
