export interface BrokerProductInterface {
  resource: product[]
}

interface product {
  broker_id: string;
  product_name: string;
}
