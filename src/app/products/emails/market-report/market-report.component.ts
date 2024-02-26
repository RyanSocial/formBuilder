import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MarketReportService} from "./market-report.service";
import {QuestionBase} from "../../../questions/questions.base";
import {BehaviorSubject, Observable} from "rxjs";
import {QuestionControlService} from "../../../shared/services/question-control-service/question-control.service";

@Component({
  selector: 'app-market-report',
  standalone: true,
  imports: [],
  providers:[MarketReportService,QuestionControlService],
  templateUrl: './market-report.component.html',
  styleUrl: './market-report.component.css'
})
export class MarketReportComponent {
  questions$ =new BehaviorSubject<QuestionBase<string>[]>([])
  markReportForm!: FormGroup
  constructor(private marketReportService: MarketReportService, private questionControlService:QuestionControlService) {
    this.questions$.next(marketReportService.getInfo())
    this.markReportForm = this.questionControlService.toFormGroup(this.questions$.getValue() as QuestionBase<string>[]);
  }
}
