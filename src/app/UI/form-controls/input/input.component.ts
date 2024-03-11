import {Component, inject, Input, input} from '@angular/core';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
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
      useFactory: () => inject(ControlContainer,{skipSelf:true})
    }
  ]
})
export class InputComponent {
  @Input({required: true}) question!: QuestionBase<string>


  // isFieldInvalid(question: string): string {
  //   const control = this.form.get(question);
  //  if(control! && control.touched && control.invalid) {
  //    return 'border-r-4 border-r-red-500'
  //  }
  //  return ''
  // }

  // warningStyle(key: string): string {
  //   if (this.isFieldInvalid(key)) {
  //     return `text-gray-300 text-sm`
  //   }
  //   return ''
  // }

}
