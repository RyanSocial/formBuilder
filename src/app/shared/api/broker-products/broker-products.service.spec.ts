import {TestBed} from '@angular/core/testing';
import {BrokerProductsService} from './broker-products.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {mockBrokerProducts} from "../../../../mockData/mock-broker-product";
import {Product} from "../../../../models/broker-product.interface";

describe('BrokerProductsService', () => {
  let brokerProductsService: BrokerProductsService;
  let httpTestingController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BrokerProductsService]
    });
    brokerProductsService = TestBed.inject(BrokerProductsService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify()
  });

  it('should be created', () => {
    expect(brokerProductsService).toBeTruthy();
  });
  describe('Get broker Products', () => {
    it('should return an array of all broker products', () => {
      let brokerProducts: Product[] | undefined
      // use ID 24 to match mocked data
      brokerProductsService.getBrokerProducts(24).subscribe({
        next: response => {
          brokerProducts = response
        }
      })
      const req = httpTestingController.expectOne('https://datafactory.autochartist.com/api/v1/mongo_config/_table/broker_product/?where_clause_filter=broker_id%3D24&limit=50&include_count=false&count_only=false')
      req.flush(mockBrokerProducts)
      expect(brokerProducts).toEqual(mockBrokerProducts.resource)
    })
  })
});
