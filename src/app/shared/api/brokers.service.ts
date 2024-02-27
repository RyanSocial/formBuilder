import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Broker} from "../../../models/broker.interface";
import {environment} from "../../../environments/environement.prod";


@Injectable({
  providedIn: 'root'
})
export class BrokersService {
  constructor(private httpClient: HttpClient) {
  }

  private url: string = environment.baseApiUrl
  headers = new HttpHeaders({
    'X-Tenantid': 'acaweb_v'
  });

  getBrokers(): Observable<Broker[]> {
    return this.httpClient.get<Broker[]>(`${this.url}/api/fetchBrokers`, {headers:this.headers})
  }
}
