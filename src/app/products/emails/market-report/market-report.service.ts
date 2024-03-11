import {Injectable} from "@angular/core";
import {QuestionBase} from "../../../questions/questions.base";
import {TextboxQuestion} from "../../../questions/question-textbox";
import {FormGroupQuestion} from "../../../questions/question-formGroup";
import {of} from "rxjs";
import {ToggleQuestion} from "../../../questions/question-toggle";
import {DropdownQuestion} from "../../../questions/question-dropdown";
import {FormGroupArray} from "../../../questions/question-formArray";

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
      // new TextboxQuestion({
      //   key: 'report_id',
      // }),
      // new TextboxQuestion({
      //   key: 'paired_report_id',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'preserve_published_date',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'original_execution',
      //   required: true,
      // }),
      // new ToggleQuestion({
      //   key: 'error_on_empty',
      //   required: true,
      //   value: false
      // }),
      // new ToggleQuestion({
      //   key: 'use_legacy',
      //   required: true,
      //   value: false
      // }),
      // new ToggleQuestion({
      //   key: 'generate_market_movements',
      //   required: true,
      //   value: false
      // }),
      // new ToggleQuestion({
      //   key: 'show_mobile_link',
      //   required: true,
      //   value: false
      // }),
      // new TextboxQuestion({
      //   key: 'trades_to_persist',
      //   required: true,
      // }),
      // new TextboxQuestion({
      //   key: 'trades_to_persist_filter_number_of_hours_back',
      //   required: true,
      // }),
      // new ToggleQuestion({
      //   key: 'trades_to_persist_filter_pattern_type',
      //   required: true,
      //   value: false
      // }),
      new FormGroupQuestion({
        key: 'messages',
        nestedFormGroup: [
          new ToggleQuestion({
            key: 'randomized_analysis',
            required: true,
            value: false
          }),
          new ToggleQuestion({
            key: 'include_forecast',
            required: true,
            value: false
          })
        ]
      }),
      new FormGroupQuestion({
        key: 'filter',
        nestedFormGroup: [
          new ToggleQuestion({
            key: 'active',
            required: true,
            value: false
          }),
          new TextboxQuestion({
            key: 'opportunities_per_data_set',
            required: true,
            value: 0
          }), new TextboxQuestion({
            key: 'filter_symbols_hours',
            required: true,
            value: 24
          }),
          new TextboxQuestion({
            key: 'filter_opportunities_hours',
            required: true,
            value: 168
          }),
        ]
      }),
      new FormGroupArray({
        key: 'testFormArray',
        required: true,
        simpleArray:true,
        options: [{key : 'Option 1', value: '1'}, {key: 'Option 2', value: '2'}]
      })

    ]
    return rss_questions
  }
}
