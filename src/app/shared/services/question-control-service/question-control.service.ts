import { Injectable } from '@angular/core';
import {QuestionBase} from "../../../questions/questions.base";
import {TextboxQuestion} from "../../../questions/question-textbox";
import {FormGroupQuestion} from "../../../questions/question-formGroup";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {
  generateRssQuestions() {
    const rss_questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'broker_id',
        label: 'Broker Id',
        required: true,
      }),
      new TextboxQuestion({
        key: 'name',
        label: 'email Name',
        required: true,
      }),
      new FormGroupQuestion({
        key: 'display_name',
        label: 'Display Name',
        value: '', // Initialize with an empty array or initial values
        nestedFormGroup:
          [
            new TextboxQuestion({
              key: 'default',
              label: 'Display Name',
              required: true,
            })
          ]
      }),

    ]
    return of(rss_questions)
  }
}
