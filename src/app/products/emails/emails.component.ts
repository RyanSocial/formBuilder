import {Component, OnInit, signal} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-emails',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './emails.component.html',
  styleUrl: './emails.component.css'
})
export class EmailsComponent implements OnInit {
  emails = signal<string[] | undefined>(undefined)

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.emails.set(this.router.getCurrentNavigation()?.extras?.state?.['emails'])

  }
}
