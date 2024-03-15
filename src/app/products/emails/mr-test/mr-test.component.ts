import {Component, inject, OnInit} from '@angular/core';
import {MarketReportService} from "../market-report/market-report.service";
import {QuestionBase} from "../../../questions/questions.base";
import {ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
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

  constructor(private marketReportService: MarketReportService, private fb: FormBuilder) {
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

  // USED FOR LISTS OF FORM CONTROL QUESTIONS
  setFormControls() {
    this.formControls.forEach(control => {
      this.parentFormGroup.addControl(control.key, new FormControl())
    })
  }

  // ADD FORM GROUPS WITH SIMPLE CONTROLS
  setFormGroup(groupName: string, questionArray: QuestionBase<string | number | boolean>[]): void {
    this.parentFormGroup.addControl(groupName, new FormGroup({}))
    questionArray.forEach(control => {
      (this.parentFormGroup.get(groupName) as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setNestedFormGroup(parentControl: string, nestedControl: string, questionArray: QuestionBase<string | number | boolean>[]): void {
    (this.parentFormGroup.get(parentControl) as FormGroup).addControl(nestedControl, new FormGroup({}))
    questionArray.forEach(control => {
      (this.parentFormGroup.get(parentControl)?.get(nestedControl) as FormGroup).addControl(control.key, new FormControl())
    })
  }

  setExecutions() {
    const group = this.fb.group({
      type: [],
      tasks: [[]]
    })
    this.parentFormGroup.addControl("executions", new FormArray([group]))
  }

  setDataSet() {
    this.parentFormGroup.addControl("data_sets", new FormArray([]))
  }

  ngOnInit() {
    this.setAllControls()
  }

  setAllControls() {

    // Set simple controls

    this.setFormControls()

    // Set the base form Groups

    this.setFormGroup('filter', this.filterControls)
    this.setFormGroup('chart', this.chartControls)
    this.setFormGroup('template', this.templateControls)
    this.setFormGroup('messages', this.messageControls)

    // set the nested form groups

    this.setNestedFormGroup('messages', 'heading', this.nestedHeadingMessageControls)
    this.setNestedFormGroup('messages', 'report_name', this.nestedReportNameMessageControls)

    //set Arrays

    this.setExecutions()
    this.setDataSet()
  }
}
