import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

interface LocalesResponse {
  locales: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor(private http: HttpClient) {}

  async getLocales(): Promise<string[]> {
    const locales$ = this.http.get<LocalesResponse>('http://0.0.0.0:8000/locales');
    const response = await firstValueFrom(locales$);
    return response.locales;
  }
}
