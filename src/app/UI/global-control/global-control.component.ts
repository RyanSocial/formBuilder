import {Component, Input, OnInit} from '@angular/core';
import {QuestionBase} from "../../questions/questions.base";
import {InputComponent} from "../form-controls/input/input.component";
import {checkType} from "../../../utils";

@Component({
  selector: 'app-global-control',
  standalone: true,
  imports: [
    InputComponent
  ],
  templateUrl: './global-control.component.html',
  styleUrl: './global-control.component.css'
})
export class GlobalControlComponent {
  @Input({required: true,}) type!: string
  @Input()question!: QuestionBase<string>

  protected readonly checkType = checkType;
}
