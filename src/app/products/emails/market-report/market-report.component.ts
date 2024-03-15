import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MarketReportService} from "./market-report.service";
import {QuestionControlService} from "../../../shared/services/question-control-service/question-control.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {InputComponent} from "../../../UI/form-controls/input/input.component";
import {MrTestComponent} from "../mr-test/mr-test.component";


@Component({
  selector: 'app-market-report',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    InputComponent,
    MrTestComponent,

  ],
  providers: [MarketReportService, QuestionControlService],
  templateUrl: './market-report.component.html',
  styleUrl: './market-report.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketReportComponent {

  markReportForm: FormGroup = new FormGroup({})
  payLoad: string = ''

  onSubmit() {
    this.payLoad = JSON.stringify(this.markReportForm.getRawValue());
  }


}
