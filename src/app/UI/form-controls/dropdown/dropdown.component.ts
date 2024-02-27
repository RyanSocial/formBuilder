import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [NgClass, NgForOf, NgIf],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  @Input() label!: string;
  @Input() options!: { key:string,value:string }[];
  @Input() formControlName!: string;
  @Output() selectedValueChange = new EventEmitter<any>();

  isOpen = false;
  selectedValue: any;
  formControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
    if (this.formControlName) {
      this.formControl = new FormControl('', []); // Set up initial form control
    }
  }

  toggleOptions() {
    this.isOpen = !this.isOpen;
  }

  selectOption(value: any) {
    this.selectedValue = value;
    this.isOpen = false;
    this.formControl.setValue(value); // Update form control value
    this.selectedValueChange.emit(value); // Emit event with selected value
  }
}
