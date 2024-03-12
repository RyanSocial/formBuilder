import {Component, inject, Input, OnInit} from '@angular/core';
import {QuestionBase} from "../../../questions/questions.base";
import {ControlContainer, FormArray, FormControl, FormGroup} from "@angular/forms";
import {QuestionControlService} from "../../../shared/services/question-control-service/question-control.service";

@Component({
  selector: 'app-array-controller',
  standalone: true,
  imports: [],
  templateUrl: './array-controller.component.html',
  styleUrl: './array-controller.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class ArrayControllerComponent implements OnInit {
  @Input({required: true}) questions!: QuestionBase<any>[] | undefined;
  @Input({required: true}) arrayControlName!: string
  parentContainer = inject(ControlContainer)
  constructor( private questionControlService: QuestionControlService) {
  }
  get parentFormGroup() {
    return this.parentContainer.control as FormGroup
  }
  ngOnInit() {
    console.log(this.questions)
    const subForm = this.questionControlService.toFormGroup(this.questions!,true)
console.log(subForm)
    this.parentFormGroup.addControl(this.arrayControlName, new FormControl(''))
  }
}
