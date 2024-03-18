import {Component, Input} from '@angular/core';
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";

@Component({
  selector: 'app-expansion-panel',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription
  ],
  templateUrl: './expansion-panel.component.html',
  styleUrl: './expansion-panel.component.css'
})
export class ExpansionPanelComponent {
  @Input({required: true}) main_heading: string = 'Main Heading'
  @Input({required: true}) description: string = 'Description'
}
