import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CallToActionComponent {

  ctaColor = signal<string>('#39BA90');
  colorInput = '';
  @Output() colorChanged = new EventEmitter<string>()
  toggleInput: boolean = false

  updateColor() {
    if (this.colorInput.length === 7 && this.colorInput.startsWith('#')) {
      this.ctaColor.set(this.colorInput);
      this.colorInput = ''
      this.toggleInput = false
      this.colorChanged.emit(this.colorInput)
    }
  }

  checkInput(): string {
    if (this.colorInput.length < 6) {
      return 'Please enter a color code with 6 characters'
    }
    if (!this.colorInput.startsWith('#')) {
      return 'Please make sure you include a #'
    }
    return ''
  }

}


