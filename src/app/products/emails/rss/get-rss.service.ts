import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {QuestionBase} from "../../../forms/question-base";
import {DropdownQuestion} from "../../../forms/question-dropdown";
import {TextboxQuestion} from "../../../forms/question-textbox";

@Injectable({
  providedIn: 'root'
})
export class GetRssService {
  getRssQuestions() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'report_id',
        label: 'Report ID',
        value: 'Alex',
        required: true,
        order: 1,
        simple: true
      }),
      new TextboxQuestion({
        key: 'name',
        label: 'name',
        type: 'email',
        required: true,
        order: 2,
        simple: true
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

  getDescription() {
    const questions: QuestionBase<string>[] = [
      new TextboxQuestion({
        key: 'key',
        label: 'key',
        value: 'Alex',
        required: true,
        order: 1,
        simple: true
      }),
      new TextboxQuestion({
        key: 'test',
        label: 'test2',
        value: 'Alex',
        required: true,
        order: 1,
        simple: true
      }),
    ]
    return of(questions.sort((a, b) => a.order - b.order))
  }
}
