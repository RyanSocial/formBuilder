import {Component, computed, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {FormatProductTitlePipe} from "../../pipes/product/format-product-title.pipe";
import {JsonPipe} from "@angular/common";
import {EmailComponent} from "./email/email/email.component";


@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FormatProductTitlePipe,
    JsonPipe,
    EmailComponent
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent {

  // activateRoute = inject(ActivatedRoute);
  //
  //
  // broker_id = signal<number>(0)
  // broker_rss = signal<any[]>([])
  //
  //
  // rss_ids = computed(() => {
  //   return this.broker_rss().map(rss => rss.report_id)
  // })
  //
  //
  // display_rss = computed(() => {
  //   return this.rss.get_all_rss().filter(rss => this.rss_ids().includes(rss.report_id))
  // })
  //
  // constructor() {
  //   this.activateRoute.params.subscribe(params => {
  //     this.broker_id.set(params['broker_id'])
  //     this.getBrokerRss()
  //   })
  // }
  //
  // async getBrokerRss() {
  //   try {
  //     const brokerRss = await this.rss.getRssById(this.broker_id())
  //     this.broker_rss.set(brokerRss.reports)
  //     console.log('broker_rss', this.broker_rss())
  //   } catch (err) {
  //     console.log('Problem getting broker RSS')
  //
  //   }
  // }
}
