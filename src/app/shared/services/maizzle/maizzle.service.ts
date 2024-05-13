import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {NewsSentimentInterface} from "../../../../models/news-sentiment-interface";

@Injectable({
  providedIn: 'root'
})
export class MaizzleService {

  constructor(private http: HttpClient) {
  }

  getNewsSentiment(emailConfig:any): Observable<string> | undefined {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',

    }); // If sending JSON payload
    const data = emailConfig['data']
    return this.http.post('http://localhost:3000/build', {data}, {
      headers,
      responseType: 'text'
    })
  }
}
