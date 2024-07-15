import {inject, Injectable, signal} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {Broker} from '../../../../models/broker.interface';
import {environment} from "../../../../environments/environment";
import {isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrokersService {
  http = inject(HttpClient);
  private url: string = environment.baseApiUrl;
  private developmentMode = signal<boolean>(false)

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*')
  private cacheKey = 'cachedBrokers';

  constructor(private httpClient: HttpClient) {
    if (isDevMode()) {
      this.developmentMode.set(true)
    } else {
      this.developmentMode.set(false)
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
    const brokers$ = this.httpClient.get<any>(`${this.url}/api/base/get/all?collection=brokers`);
    const brokers = await firstValueFrom(brokers$);
    if (isDevMode()) {
      localStorage.setItem(this.cacheKey, JSON.stringify(brokers));
    }
    return brokers;
  }

  setMode(): boolean {
    return this.developmentMode()
  }

}
