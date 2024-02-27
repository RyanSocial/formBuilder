import {Injectable} from "@angular/core";
import {QuestionBase} from "../../../questions/questions.base";
import {TextboxQuestion} from "../../../questions/question-textbox";
import {FormGroupQuestion} from "../../../questions/question-formGroup";
import {of} from "rxjs";

@Injectable()
export class MarketReportService {
  getInfo() {
    const rss_questions: QuestionBase<any>[] = [
      new TextboxQuestion({
        key: 'broker_id',
        label: 'Broker Id',
        required: true,
        placeholder: 'Broker_Id'
      }),
      new TextboxQuestion({
        key: 'name',
        label: 'Market Report Name',
        required: true,
        placeholder: 'Market Report Name',
      }),
      new TextboxQuestion({
        key: 'Original Execution',
        label: 'Original Execution',
        required: true,
      })

    ]
    return rss_questions
  }
}
