import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {filter, map, Observable, tap} from "rxjs";
import {environment} from "../../../../environments/environement.prod";
import {toSignal} from "@angular/core/rxjs-interop";
import {MarketReport, Report} from "../../../../models/market-report.interface";


@Injectable({
  providedIn: 'root'
})
export class MarketReportsService {
  private url: string = environment.baseApiUrl

  constructor(private httpClient: HttpClient) {
  }

  headers = new HttpHeaders({
    'X-Tenantid': 'acaweb_v'
  });


  checkReportType(reportType: string): Observable<Report[]> | undefined {

    switch (reportType.toLowerCase()) {
      case 'market_report_email' :
        return this.getMarketReports(734)
      default :
        return undefined
    }
  }

  getMarketReports(broker_id: number): Observable<Report[]> {
    console.log('Running Market Reports')
    return this.httpClient.get<MarketReport>(`${this.url}/api/products/market-reports/broker-market-report/?brokerId=${broker_id}`, {headers: this.headers})
      .pipe(
        tap(MarketReport => console.log(MarketReport)),
        map(marketReport => marketReport.modules.mr.reports),
      )
  }
}
