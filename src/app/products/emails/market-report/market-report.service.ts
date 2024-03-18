import {Injectable} from "@angular/core";
import {QuestionBase} from "../../../questions/questions.base";
import {TextboxQuestion} from "../../../questions/question-textbox";
import {ToggleQuestion} from "../../../questions/question-toggle";
import {FormGroupQuestion} from "../../../questions/question-formGroup";

@Injectable()
export class MarketReportService {
  getFormControlQuestions() {
    const rss_questions: QuestionBase<string | number | boolean>[] = [
      new TextboxQuestion({
        key: 'broker_id',
        required: true,
      }),
      new TextboxQuestion({
        key: 'name',
        required: true,
      }),
      new TextboxQuestion({
        key: 'report_id',
      }),
      new TextboxQuestion({
        key: 'paired_report_id',
        required: true,
      }),
      new TextboxQuestion({
        key: 'preserve_published_date',
        required: true,
      }),
      new TextboxQuestion({
        key: 'original_execution',
        required: true,
      }),
      new ToggleQuestion({
        key: 'error_on_empty',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'use_legacy',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'generate_market_movements',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'show_mobile_link',
        required: true,
        value: false
      }),
      new TextboxQuestion({
        key: 'trades_to_persist',
        required: true,
      }),
      new TextboxQuestion({
        key: 'trades_to_persist_filter_number_of_hours_back',
        required: true,
      }),
      new ToggleQuestion({
        key: 'trades_to_persist_filter_pattern_type',
        required: true,
        value: false
      }),
    ]
    return rss_questions
  }

  getFilterQuestions() {
    const filter: QuestionBase<any>[] = [new ToggleQuestion({
      key: 'active',
      required: true,
      value: false
    }),
      new TextboxQuestion({
        key: 'opportunities_per_data_set',
        required: true,
      }),
      new TextboxQuestion({
        key: 'filter_symbols_hours',
        required: true,
      }),
      new TextboxQuestion({
        key: 'filter_opportunities_hours',
        required: true,
      }),
      new TextboxQuestion({
        key: 'reorder_opportunities',
        required: true,
      }),
    ]
    return filter
  }

  getChartQuestions(): QuestionBase<string | number>[] {
    return [
      new TextboxQuestion({
        key: 'label',
        required: true,
        value: 'autochartist.com'
      }),
      new TextboxQuestion({
        key: 'rsi_period',
        required: true,
        value: 34
      }),
      new TextboxQuestion({
        key: ' rsi_down_above_level',
        required: true,
        value: 60
      }),
      new TextboxQuestion({
        key: 'rsi_up_below_level',
        required: true,
        value: 40
      }),
      new TextboxQuestion({
        key: 'moving_average_period',
        required: true,
        value: 34
      })
      , new TextboxQuestion({
        key: 'show_bottom_axis',
        required: true,
      }),

    ]
  }

  getTemplateQuestions(): QuestionBase<string | number | boolean>[] {
    return [
      new TextboxQuestion({
        key: 'default_time_zone',
        required: true,
        value: 'UCT'
      }),
      new ToggleQuestion({
        key: 'true',
        required: true,
        value: true
      })
    ]
  }

  getMessageQuestions(): QuestionBase<string | number | boolean>[] {
    return [
      new ToggleQuestion({
        key: 'randomized_analysis',
        required: true,
        value: true,
      }),
      new ToggleQuestion({
        key: 'include_session',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'include_forecast',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'include_supporting_indicator',
        required: true,
        value: false
      }),
      new ToggleQuestion({
        key: 'include_stop_level',
        required: true,
        value: false
      }),

    ]
  }

  getMessageHeadingQuestions(): QuestionBase<string | number | boolean>[] {
    return [
      new TextboxQuestion({
        key: 'value',
        required: true,
      }),
      new TextboxQuestion({
        key: 'type',
        required: true,
      }),
    ]
  }

  getMessageReportNAme(): QuestionBase<string | number | boolean>[] {
    return [
      new TextboxQuestion({
        key: 'report_name',
        required: true,
      }),
      new TextboxQuestion({
        key: 'type',
        required: true,
      }),
    ]
  }


}
