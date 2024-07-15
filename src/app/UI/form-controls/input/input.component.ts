import {Component, inject, Input, input, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {NgClass, NgIf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {QuestionBase} from "../../../../models/question-base";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgClass,
    MatIcon,
    NgIf,
    MatIconButton
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class InputComponent {
  @Input() control! : FormControl
  @Input({required: true}) question!: QuestionBase<string | number | boolean>

  clearInput() {
    this.control.setValue('')
  }
}
