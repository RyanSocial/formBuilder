import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {Broker} from '../../../../models/broker.interface';
import {environment} from '../../../../environments/environement.prod';
import {isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {
  http = inject(HttpClient);
  private url: string = environment.baseApiUrl;

  headers = new HttpHeaders({
    'X-Tenantid': 'acaweb_v'
  });

  private cacheKey = 'cachedBrokers';

  constructor(private httpClient: HttpClient) {
    if (isDevMode()) {
      console.log('Running in development mode');
    } else {
      console.log('Running in production mode');
    }
  }

  async getBrokers(): Promise<Broker[]> {
    // Check for cached data
    const cachedData = localStorage.getItem(this.cacheKey);
    if (isDevMode()) {
      if (cachedData) {
        return JSON.parse(cachedData) as Broker[];
      }
    }


    // Fetch data from API
    const brokers$ = this.httpClient.get<Broker[]>(`${this.url}/api/fetchBrokers`, {headers: this.headers});
    const brokers = await firstValueFrom(brokers$);

    if (isDevMode()) {
      localStorage.setItem(this.cacheKey, JSON.stringify(brokers));
    }


    return brokers;
  }
}
