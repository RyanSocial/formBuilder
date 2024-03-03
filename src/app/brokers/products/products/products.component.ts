import {Component, computed, EventEmitter, input, OnInit, Output, signal} from '@angular/core';
import {Broker} from "../../../../models/broker.interface";
import {BrokerProductsService} from "../../../shared/api/broker-products/broker-products.service";
import {JsonPipe, NgIf} from "@angular/common";
import {SelectBrokerService} from "../../../shared/services/select-broker/select-broker.service";
import {Product} from "../../../../models/broker-product.interface";
import {Router} from "@angular/router";
import {FormatProductTitlePipe} from "../../../pipes/product/format-product-title.pipe";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    JsonPipe,
    NgIf,
    FormatProductTitlePipe
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

  constructor(private brokerProductsService: BrokerProductsService, private selectBrokerService: SelectBrokerService, private router: Router) {
    this.broker.set(this.selectBrokerService.getSelectedBroker())
  }



  ngOnInit() {
    this.brokerProductsService.getBrokerProducts(this.broker()?.broker_id!).subscribe({

      next: value => {
        this.products.set(value)
      }
    })
  }

  emailProducts = computed(() => {
    return this.products()?.filter(product => product.product_name.toLowerCase().includes('email'))
  })
  // Includes mobile app
  WebProducts = computed(() => {
    return this.products()?.filter(product => !product.product_name.toLowerCase().includes('email'))
  })



  configureEmail() {
    this.router.navigate(['/emails'], {state: {emails: this.emailProducts()}});
  }
  configureProducts() {
    this.router.navigate(['/products'], {state: {emails: this.WebProducts()}});
  }
}
