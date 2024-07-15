import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

export interface RssReport {
  report_id: string;
  name: string;
  display_name: {
    key: string;
  };
  description: {
    key: string;
  };
  locales: Locale[];
  enabled: boolean;
  type: string;
  send_limit: number;
}

interface Locale {
  [key: string]: {
    url: string;
    disclaimer: string;
  };
}

interface RssReports {
  message: string;
  data: RssReport[]
}

interface SingleReport {
  message: string;
  data: RssReport
}

@Injectable({
  providedIn: 'root'
})
export class RssService {
  http = inject(HttpClient)

  async getRssAll(): Promise<RssReport[]> {
    const rss$ = this.http.get<RssReports>('http://0.0.0.0:8000/rss_reports')
    const rss = await firstValueFrom(rss$)
    return rss.data
  }

  async getReportById(report_id: number): Promise<RssReport> {
    const report$ = this.http.get<SingleReport>(`http://0.0.0.0:8000/rss_reports/${report_id}`)
    const report = await firstValueFrom(report$)
    return report.data
  }
}
