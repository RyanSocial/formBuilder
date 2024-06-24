import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, map} from "rxjs";
import {Product} from "../../../../models/broker-product.interface";

export interface ProductResource {
  resource: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class BrokerProductsService {
  private url: string = "const brokerId = 24;\n" +
    "const encodedBrokerId = encodeURIComponent(brokerId.toString());\n" +
    "const url = `https://datafactory.autochartist.com/api/v1/mongo_config/_table/broker_product/?where_clause_filter=broker_id%3D${encodedBrokerId}&limit=50&include_count=false&count_only=false`;\n"

  constructor(private httpClient: HttpClient) {
  }

  getBrokerProducts(broker_id: number) {
    const encodedBrokerId = `broker_id%3D${broker_id}`
    return this.httpClient.get<ProductResource>(`https://datafactory.autochartist.com/api/v1/mongo_config/_table/broker_product/?where_clause_filter=${encodedBrokerId}&limit=50&include_count=false&count_only=false`)
      .pipe(
        map(response => response.resource)
      )
  }

  async getProducts(broker_id: number): Promise<Product[]> {
    const encodedBrokerId = `broker_id%3D${broker_id}`
    const products$ = this.httpClient.get<ProductResource>(`https://datafactory.autochartist.com/api/v1/mongo_config/_table/broker_product/?where_clause_filter=${encodedBrokerId}&limit=50&include_count=false&count_only=false`)
    const products = await firstValueFrom(products$)
    return products.resource
  }

}
