import {Component, inject, Input} from '@angular/core';
import {QuestionBase} from "../../../questions/questions.base";
import {checkType} from "../../../../utils";
import {InputComponent} from "../input/input.component";
import {ControlContainer, ReactiveFormsModule} from "@angular/forms";
import {ArrayControllerComponent} from "../array-controller/array-controller.component";

@Component({
  selector: 'app-form-controller',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ArrayControllerComponent
  ],
  templateUrl: './form-controller.component.html',
  styleUrl: './form-controller.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true})
    }
  ]
})
export class FormControllerComponent {
  @Input() questions!: QuestionBase<any>[] | null;
  constructor() {}

  protected readonly checkType = checkType;
}
