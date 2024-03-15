import {Component, inject, OnInit} from '@angular/core';
import {MarketReportService} from "../market-report/market-report.service";
import {QuestionBase} from "../../../questions/questions.base";
import {ControlContainer, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../../UI/form-controls/input/input.component";


@Component({
  selector: 'app-mr-test',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule
  ],
  templateUrl: './mr-test.component.html',
  styleUrl: './mr-test.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})

export class MrTestComponent implements OnInit {
  parentContainer = inject(ControlContainer)
  formControls: QuestionBase<string | number | boolean>[] = []
  filterControls: QuestionBase<any>[] = []
  chartControls: QuestionBase<string | number>[] = []
  templateControls: QuestionBase<string | number | boolean>[] = []
  messageControls: QuestionBase<string | number | boolean>[] = []
  nestedHeadingMessageControls: QuestionBase<string | number | boolean>[] = []
  nestedReportNameMessageControls: QuestionBase<string | number | boolean>[] = []


  constructor(private marketReportService: MarketReportService) {
    this.formControls = marketReportService.getFormControlQuestions()
    this.filterControls = marketReportService.getFilterQuestions()
    this.chartControls = marketReportService.getChartQuestions()
    this.templateControls = marketReportService.getTemplateQuestions()
    this.messageControls = marketReportService.getMessageQuestions()
    this.nestedHeadingMessageControls = marketReportService.getMessageHeadingQuestions()
    this.nestedReportNameMessageControls = marketReportService.getMessageReportNAme()

  }

  get parentFormGroup() {
    return this.parentContainer.control as FormGroup
  }

  setFormControls() {
    this.formControls.forEach(control => {
      this.parentFormGroup.addControl(control.key, new FormControl())
    })
  }

  setFilterFormGroup() {
    this.parentFormGroup.addControl("filter", new FormGroup({}))
    this.filterControls.forEach(control => {
      (this.parentFormGroup.get('filter') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setChartFormGroup() {
    this.parentFormGroup.addControl("chart", new FormGroup({}))
    this.chartControls.forEach(control => {
      (this.parentFormGroup.get('chart') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setTemplateFormGroup() {
    this.parentFormGroup.addControl("template", new FormGroup({}))
    this.templateControls.forEach(control => {
      (this.parentFormGroup.get('template') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setMessageFormGroup() {
    this.parentFormGroup.addControl("messages", new FormGroup({}))
    this.messageControls.forEach(control => {
      (this.parentFormGroup.get('messages') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setNestedHeadingMessageFormGroup() {
    (this.parentFormGroup.get('messages') as FormGroup).addControl("heading", new FormGroup({}))
    this.nestedHeadingMessageControls.forEach(control => {
      (this.parentFormGroup.get('messages')?.get('heading') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setNestedReportName() {
    (this.parentFormGroup.get('messages') as FormGroup).addControl("report_name", new FormGroup({}))
    this.nestedReportNameMessageControls.forEach(control => {
      (this.parentFormGroup.get('messages')?.get('report_name') as FormGroup).addControl(control.key, new FormControl())
    })
  }

  ngOnInit() {
    this.setAllControls()
  }

  setAllControls() {
    this.setFormControls()
    this.setFilterFormGroup()
    this.setChartFormGroup()
    this.setTemplateFormGroup()
    this.setMessageFormGroup()
    this.setNestedHeadingMessageFormGroup()
    this.setNestedReportName()
  }
}
