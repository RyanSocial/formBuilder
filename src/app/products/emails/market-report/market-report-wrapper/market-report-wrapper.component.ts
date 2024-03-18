import {Component, inject, OnInit} from '@angular/core';
import {MarketReportService} from "../market-report.service";
import {QuestionBase} from "../../../../questions/questions.base";
import {ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../../../UI/form-controls/input/input.component";
import {JsonPipe, NgForOf, ViewportScroller} from "@angular/common";
import {ExpansionPanelComponent} from "../../../../UI/expansion-panel/expansion-panel.component";

interface Execution {
  type: string;
  tasks: Task[];
}

interface Task extends FormControl {
  name: string; // Or other properties as needed
}

@Component({
  selector: 'app-market-report-wrapper',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    NgForOf,
    JsonPipe,
    ExpansionPanelComponent
  ],
  templateUrl: './maret-report-wrapper.component.html',
  styleUrl: './market-report-wrapper.component.css',
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf: true})
    }
  ]
})

export class MarketReportWrapperComponent implements OnInit {
  parentContainer = inject(ControlContainer)
  formControls: QuestionBase<string | number | boolean>[] = []
  filterControls: QuestionBase<any>[] = []
  chartControls: QuestionBase<string | number>[] = []
  templateControls: QuestionBase<string | number | boolean>[] = []
  messageControls: QuestionBase<string | number | boolean>[] = []
  nestedHeadingMessageControls: QuestionBase<string | number | boolean>[] = []
  nestedReportNameMessageControls: QuestionBase<string | number | boolean>[] = []

  constructor(
    private marketReportService: MarketReportService,
    private fb: FormBuilder,
    private viewportScroller: ViewportScroller) {
    this.formControls = marketReportService.getFormControlQuestions()
    this.filterControls = marketReportService.getFilterQuestions()
    this.chartControls = marketReportService.getChartQuestions()
    this.templateControls = marketReportService.getTemplateQuestions()
    this.messageControls = marketReportService.getMessageQuestions()
    this.nestedHeadingMessageControls = marketReportService.getMessageHeadingQuestions()
    this.nestedReportNameMessageControls = marketReportService.getMessageReportNAme()

  }

  ngOnInit() {
    this.setAllControls()
  }


  get parentFormGroup() {
    return this.parentContainer.control as FormGroup
  }

  controls: { [key: string]: FormControl } = {
// Will be populated with a list of getters in the setFormControls method
  }


  getControl(key: string): FormControl {
    return this.controls[key]
  }

  getNestedControl(groupName: string, controlName: string, nestedGroupName?: string): FormControl {
    if (!nestedGroupName) {
      return this.parentFormGroup.get(groupName)?.get(controlName) as FormControl
    }
    return this.parentFormGroup.get(groupName)?.get(nestedGroupName)?.get(controlName) as FormControl
  }


  // USED FOR LISTS OF FORM CONTROL QUESTIONS
  setFormControls() {
    this.formControls.forEach(control => {
      this.parentFormGroup.addControl(control.key, new FormControl(control.value ? control.value : ''))
      this.controls[control.key] = this.parentFormGroup.get(control.key) as FormControl
    })
  }


  // ADD FORM GROUPS WITH SIMPLE CONTROLS
  setFormGroup<T>(groupName: string, questionArray: QuestionBase<T>[]): void {
    this.parentFormGroup.addControl(groupName, new FormGroup({}))
    questionArray.forEach(control => {
      const formControl = control.controlType === 'toggle'
        ? new FormControl<boolean>(control.value as boolean) // Special case for toggles
        : new FormControl(control.value ? control.value : '');  // Default for other types

      (this.parentFormGroup.get(groupName) as FormGroup).addControl(control.key, formControl)
    })
  }

  setNestedFormGroup(parentControl: string, nestedControl: string, questionArray: QuestionBase<string | number | boolean>[]): void {
    (this.parentFormGroup.get(parentControl) as FormGroup).addControl(nestedControl, new FormGroup({}))
    questionArray.forEach(control => {
      (this.parentFormGroup.get(parentControl)?.get(nestedControl) as FormGroup).addControl(control.key, new FormControl(control.value ? control.value : ''))
    })
  }

  setExecutions() {
    const group = this.fb.group({
      type: [],
      tasks: new FormArray<Task>([])
    })
    this.parentFormGroup.addControl("executions", new FormArray([group]))
  }

  setDataSet() {
    this.parentFormGroup.addControl("data_sets", new FormArray([]))
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
