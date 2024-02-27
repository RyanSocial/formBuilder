import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";
import {InputComponent} from "./UI/form-controls/input/input.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarketReportComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_builder';
}
