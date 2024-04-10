import { Component } from '@angular/core';
import {InfoComponent} from "../../components/body/info/info.component";
import {AcLogoComponent} from "../../components/body/ac-logo/ac-logo.component";
import {VisualInfoComponent} from "../../components/body/visual-info/visual-info.component";

@Component({
  selector: 'app-market-report-styling',
  standalone: true,
  imports: [
    InfoComponent,
    AcLogoComponent,
    VisualInfoComponent
  ],
  templateUrl: './market-report-styling.component.html',
  styleUrl: './market-report-styling.component.css'
})
export class MarketReportStylingComponent {

}
