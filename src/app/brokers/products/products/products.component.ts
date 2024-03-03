import {Component, computed, EventEmitter, input, OnInit, Output, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";
import {BrokerProductsService} from "../../../shared/api/broker-products/broker-products.service";
import {JsonPipe} from "@angular/common";
import {SelectBrokerService} from "../../../shared/services/select-broker/select-broker.service";
import {Product} from "../../../../models/broker-product.interface";

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
  broker = signal<Broker | undefined>(undefined)
  products = signal<Product[] | undefined>(undefined)

  closeProducts() {
    this.closeProduct.emit(false)
  }

  constructor(private brokerProductsService: BrokerProductsService, private selectBrokerService: SelectBrokerService) {
    this.broker.set(this.selectBrokerService.getSelectedBroker())
  }

  ngOnInit() {
    this.brokerProductsService.getBrokerProducts(this.broker()?.broker_id!).subscribe({
      next: value => {
        console.log(value)
        this.products.set(value)
      }
    })
  }

  // emailProducts = computed( () => {
  //   return this.products()?
  // })
}
