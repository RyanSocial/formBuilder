import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environement.prod";
import {toSignal} from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class MarketReportsService {
  private url: string = environment.baseApiUrl

  constructor(private httpClient: HttpClient) {
  } headers = new HttpHeaders({
    'X-Tenantid': 'acaweb_v'
  });

  getMarketReports(broker_id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/api/products/market-reports/broker-market-report/?brokerId=${broker_id}`,{headers:this.headers})
  }
}
