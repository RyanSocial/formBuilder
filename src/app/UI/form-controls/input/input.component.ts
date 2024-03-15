import {Component, inject, Input, input} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {QuestionBase} from "../../../questions/questions.base";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgClass
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
  @Input({required: true}) question!: QuestionBase<string | number | boolean>
}
