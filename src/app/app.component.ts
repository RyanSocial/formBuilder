import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_builder';
}
