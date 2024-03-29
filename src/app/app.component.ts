import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MarketReportComponent} from "./products/emails/market-report/market-report.component";
import {InputComponent} from "./UI/form-controls/input/input.component";


import {BrokersListComponent} from "./brokers/brokers-list/brokers-list.component";
import {NavBarComponent} from "./UI/nav/nav-bar/nav-bar.component";
import {GlobalErrorHandlingComponent} from "./UI/error-handling/global-error-handling/global-error-handling.component";


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, MarketReportComponent, InputComponent, BrokersListComponent, NavBarComponent, GlobalErrorHandlingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
