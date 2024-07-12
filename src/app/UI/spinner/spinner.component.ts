import {Component, inject, signal} from '@angular/core';
import {ToggleSpinnerService} from "../../shared/services/spinner/toggle-spinner.service";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  toggleSpinner = inject(ToggleSpinnerService)

  get showToggle() {
    return this.toggleSpinner.getToggleStatus()
  }

}
