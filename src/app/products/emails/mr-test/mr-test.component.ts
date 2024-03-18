import {AbstractType, Component, ElementRef, inject, OnInit, viewChild, ViewChild} from '@angular/core';
import {MarketReportService} from "../market-report/market-report.service";
import {QuestionBase} from "../../../questions/questions.base";
import {ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {InputComponent} from "../../../UI/form-controls/input/input.component";
import {JsonPipe, NgForOf, ViewportScroller} from "@angular/common";

interface Execution {
  type: string;
  tasks: Task[];
}

interface Task extends FormControl {
  name: string; // Or other properties as needed
}

@Component({
  selector: 'app-mr-test',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    NgForOf,
    JsonPipe
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
  testForm: FormGroup

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
    this.testForm = new FormGroup({
      skills: new FormArray([
        new FormControl(),
        new FormControl(),
        new FormControl()
      ])
    })
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

  getNestedControl(groupName: string, controlName: string): FormControl {
    return this.parentFormGroup.get(groupName)?.get(controlName) as FormControl
  }


  // USED FOR LISTS OF FORM CONTROL QUESTIONS
  setFormControls() {
    this.formControls.forEach(control => {
      this.parentFormGroup.addControl(control.key, new FormControl(control.value ? control.value : ''))
      this.controls[control.key] = this.parentFormGroup.get(control.key) as FormControl
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

  logControl(parent: any) {
    // console.log(parent.controls.get('tasks'))
  }

  protected readonly FormGroup = FormGroup;
}
