import {Component, Input, OnInit} from '@angular/core';
import {MarketReportsService} from "../../../../shared/api/market-reports/market-reports.service";
import {FormatProductTitlePipe} from "../../../../pipes/product/format-product-title.pipe";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    FormatProductTitlePipe,
    RouterLink
  ],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent implements OnInit {
  @Input({required: true}) product_name!: string
  constructor(private marketReportsService: MarketReportsService) {
  }
  ngOnInit() {
    console.log('products', this.product_name)
  }
}
