import {Injectable} from "@angular/core";
import {QuestionBase} from "../../../questions/questions.base";
import {TextboxQuestion} from "../../../questions/question-textbox";
import {FormGroupQuestion} from "../../../questions/question-formGroup";
import {of} from "rxjs";
import {ToggleQuestion} from "../../../questions/question-toggle";
import {DropdownQuestion} from "../../../questions/question-dropdown";

@Injectable()
export class MarketReportService {
  getMarketReportQuestions() {
    const rss_questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'broker_id',
        required: true,
      }),
      new TextboxQuestion({
        key: 'name',
        required: true,
      }),
      new TextboxQuestion({
        key: 'original_execution',
        required: true,
        hide: true

      }),
      new ToggleQuestion({
        key: 'preserve_published_date',
        required: true,
        checked:true
      }),
      new ToggleQuestion({
        key: 'Error on Empty',
        required: true,
        value:true
      }),
      new ToggleQuestion({
        key: 'Use Legacy',
        required: true,
        value: true
      }),
      new ToggleQuestion({
        key: 'Generate Market Movements',
        required: true,

      }),
      new ToggleQuestion({
        key: 'Show Mobile Link',
        required: true,
      }),
      new DropdownQuestion({
        key: 'Locales',
        options: [{ key: '1', value: 'uk' }]
      })

    ]
    return rss_questions
  }
}
