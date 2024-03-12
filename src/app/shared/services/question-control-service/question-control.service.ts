import {Injectable} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {QuestionBase} from "../../../questions/questions.base";
import {FormGroupArray} from "../../../questions/question-formArray";
import {FormGroupQuestion} from "../../../questions/question-formGroup";

@Injectable()
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<any>[], buildArray: boolean = false) {
    const group: any = {};
    questions.forEach((question) => {
      if (question.controlType === 'FormGroupArray' && buildArray) {
        // Create a FormArray and push a nested FormGroup with nested controls
        const nestedFormGroup = new FormGroup({});
        question.nestedQuestions!.forEach((nestedQuestion) => {
          if (nestedQuestion instanceof FormGroupArray) {
            nestedFormGroup.addControl(nestedQuestion.key, this.createNewArray(nestedQuestion.nestedQuestions!))
          } else if (nestedQuestion instanceof FormGroupQuestion) {
            nestedFormGroup.addControl(nestedQuestion.key, this.createFormGroup(nestedQuestion.nestedFormGroup!))
          } else {
            nestedFormGroup.addControl(
              nestedQuestion.key,
              new FormControl(
                nestedQuestion.value || '',
                nestedQuestion.required ? Validators.required : null
              )
            );
          }
        });
        const formArray = new FormArray([nestedFormGroup]);
        group[question.key] = formArray; // Assign the FormArray to the key
      } else if (question.controlType === 'FormGroup') {

        group[question.key] = this.createFormGroup(question.nestedFormGroup!)
      } else if (question.controlType !== 'FormGroup' && question.controlType !== 'FormGroupArray') {
        group[question.key] = question.required
          ? new FormControl(question.value || '', Validators.required)
          : new FormControl(question.value || '');
      }
    });
    return new FormGroup(group);
  }

  createFormGroup(controlsArray: QuestionBase<any>[]) {
    const group = new FormGroup({})
    controlsArray.forEach(control => {
      group.addControl(
        control.key,
        new FormControl(
          control.value || '',
          control.required ? Validators.required : null
        )
      )
    })
    return group
  }

  private createNewArray(nestedQuestions: QuestionBase<any>[]) {
    const arrayValue = this.toFormGroup(nestedQuestions)
    return new FormArray([arrayValue])
  }
}
