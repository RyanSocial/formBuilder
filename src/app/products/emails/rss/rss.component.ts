import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';

import {GetRssService} from "./get-rss.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputComponent} from "../../../UI/form-controls/input/input.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {JsonPipe, NgForOf} from "@angular/common";
import {FormDataService} from "../../../shared/services/form-data/form-data.service";
import {RssReport, RssService} from "../../../shared/api/rss/rss.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {openRssDialog, ReportComponent} from "./report/report.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTab, MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-rss',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    FormsModule,
    NgForOf,
    JsonPipe,
    RouterOutlet,
    RouterLink,
    ReportComponent,
    MatTabGroup,
    MatTab
  ],
  templateUrl: './rss.component.html',
  styleUrl: './rss.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RssComponent implements OnInit {
  // Angular Form Builder
  fb = inject(FormBuilder)
  dialog = inject(MatDialog)
  // Questions
  rssService = inject(GetRssService)
  localeService = inject(FormDataService)

  // API services
  rssServiceAPI = inject(RssService)

  // Component dat

  selectedReport = signal<RssReport | undefined>(undefined)
  rssEmails = signal<RssReport[]>([])
  report_id = computed(() => {
    return this.selectedReport()?.report_id
  })

  rssForm!: FormGroup
  payLoad: string = ''
  showEdit = signal<boolean>(false);


  constructor() {
    this.getAllRss().then((resReportArray) => {
      this.rssEmails.set(resReportArray)
    })

  }

  ngOnInit() {


    const dbData = [
      {onion: {url: 'example_url_onion', default: false}},
      {tomato: {url: 'example_url_tomato', default: false}}
    ];

    // Transform DB data to a simple array for the multi-select
    // const selectedToppings = dbData.map(obj => Object.keys(obj)[0]);

    // Patch the transformed data to the form
    // this.rssForm.patchValue({
    //   toppings: selectedToppings
    // });


  }

  async getAllRss(): Promise<RssReport[]> {
    console.log('getting all rss')
    try {
      return await this.rssServiceAPI.getRssAll()
    } catch (error) {
      console.log(error)
      return []
    }
  }

  onSubmit() {

    this.setToppings()
    setTimeout(() => {
      this.payLoad = JSON.stringify(this.rssForm.getRawValue());
    }, 2000)
  }

  setToppings() {
    console.log('setting topings')
    const toppingsArray = this.rssForm.get('toppings')?.value as Array<string>;
    const mappedArray = toppingsArray.map(value => {
      const lowerCase = value.toLowerCase();
      const url = `https://ah2vg52sj5sxzu7risngyatc6q0mgbua.lambda-url.eu-west-1.on.aws/category/news_sentiment_${lowerCase}_859/feed?result_type=News%20Sentiment`;
      const isDefault = value === 'en_GB';
      return {
        [value]: {
          url: url,
          default: isDefault
        }
      };
    });

    this.rssForm.get('toppings')?.patchValue(mappedArray)
    console.log(this.rssForm.get('toppings')?.value as Array<string>)

  }

  selectReport(report: RssReport) {
    this.selectedReport.set(report)
    console.log(this.selectedReport())

  }
  async onEditRss(report:RssReport) {
    const newRss = await openRssDialog(
      this.dialog,
      {
        mode: 'update',
        title: 'Edit Rss',
        report
      }
    )
    console.log('Rss edited', newRss)
  }
}
