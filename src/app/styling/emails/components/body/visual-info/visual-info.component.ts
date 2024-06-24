import { Component } from '@angular/core';
import {DataIconComponent} from "../data-icon/data-icon.component";

@Component({
  selector: 'app-visual-info',
  standalone: true,
  imports: [
    DataIconComponent
  ],
  templateUrl: './visual-info.component.html',
  styleUrl: './visual-info.component.css'
})
export class VisualInfoComponent {

}
