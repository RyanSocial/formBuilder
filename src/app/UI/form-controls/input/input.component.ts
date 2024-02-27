import {Component, Input, input} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {QuestionBase} from "../../../questions/questions.base";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({required: true}) question!: QuestionBase<string>

}
