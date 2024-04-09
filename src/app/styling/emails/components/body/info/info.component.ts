import { Component } from '@angular/core';
import {AcLogoComponent} from "../ac-logo/ac-logo.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    AcLogoComponent
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  trackClick() {
    alert('You click something')
  }
}
