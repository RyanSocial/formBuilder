import {ChangeDetectionStrategy, Component, effect, inject, input, OnInit, signal} from '@angular/core';
import {JsonPipe} from "@angular/common";
import {FormDataService} from "../../../../shared/services/form-data/form-data.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RssReport, RssService} from "../../../../shared/api/rss/rss.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {RssData} from "./rss-data";
import {RssComponent} from "../rss.component";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportComponent  {
  dialogRef = inject(MatDialogRef)
  data: RssData = inject(MAT_DIALOG_DATA)
  fb = inject(FormBuilder)
  form = this.fb.group({
    report_id: [null, [Validators.required]],

  })
  onClose() {
    this.dialogRef.close()
  }
}
export async function openRssDialog(dialog:MatDialog,data:RssData) {
  const config = new MatDialogConfig()
  config.disableClose = true
  config.autoFocus = true
  config.width = "800px";
  config.data = data

 const close$ = dialog.open(ReportComponent,config).afterClosed()
  return firstValueFrom(close$)
}