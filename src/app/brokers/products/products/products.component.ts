import {Component, EventEmitter, input, OnInit, Output, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";
import {BrokerProductsService} from "../../../shared/api/broker-products/broker-products.service";
import {BrokerProductInterface} from "../../../../models/broker-product.interface";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  @Output() closeProduct: EventEmitter<boolean> = new EventEmitter<boolean>()
  broker = input.required<Broker | undefined>()
  products = signal<BrokerProductInterface | undefined>(undefined)

  closeProducts() {
    this.closeProduct.emit(false)
  }

  constructor(private brokerProductsService: BrokerProductsService) {
  }

  ngOnInit() {
    this.brokerProductsService.getBrokerProducts(this.broker()?.broker_id!).subscribe({
      next: value => {
        console.log(value)
        this.products.set(value)
      }
    })
    console.log(this.products())
  }
}
