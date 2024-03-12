import {Component, OnInit} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarketReportService} from "./market-report.service";
import {QuestionBase} from "../../../questions/questions.base";
import {BehaviorSubject, pipe} from "rxjs";
import {QuestionControlService} from "../../../shared/services/question-control-service/question-control.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {checkType} from "../../../../utils";
import {InputComponent} from "../../../UI/form-controls/input/input.component";
import {FormControllerComponent} from "../../../UI/form-controls/form-controller/form-controller.component";


@Component({
  selector: 'app-market-report',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    InputComponent,
    FormControllerComponent,

  ],
  providers: [MarketReportService, QuestionControlService],
  templateUrl: './market-report.component.html',
  styleUrl: './market-report.component.css'
})
export class MarketReportComponent implements OnInit {
  questions$ = new BehaviorSubject<QuestionBase<any>[]>([]);
  markReportForm!: FormGroup;
  payLoad: string = ''

  constructor(
    private marketReportService: MarketReportService,
    private questionControlService: QuestionControlService
  ) {
  }

  ngOnInit() {
    // Retrieve questions data in ngOnInit
    const questions = this.marketReportService.getMarketReportQuestions();
    this.questions$.next(questions);

    // Create the form group after the questions are available
    this.markReportForm = this.questionControlService.toFormGroup(this.questions$.getValue() as QuestionBase<string>[]);

  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.markReportForm.getRawValue());
  }


  protected readonly checkType = checkType;
}
