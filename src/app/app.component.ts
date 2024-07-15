import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BrokersListComponent} from "./brokers/brokers-list/brokers-list.component";
import {NavBarComponent} from "./UI/nav/nav-bar/nav-bar.component";
import {GlobalErrorHandlingComponent} from "./UI/error-handling/global-error-handling/global-error-handling.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BrokersListComponent, NavBarComponent, GlobalErrorHandlingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
