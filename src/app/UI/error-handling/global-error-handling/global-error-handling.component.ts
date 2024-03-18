import {Component, signal} from '@angular/core';
import {Message, MessageService, MessageType} from "../../../shared/services/message/message.service";
import {Observable, tap} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-global-error-handling',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
  ],
  templateUrl: './global-error-handling.component.html',
  styleUrl: './global-error-handling.component.css'
})
export class GlobalErrorHandlingComponent {
  currentMessage$: Observable<Message | null>
  constructor(private messageService: MessageService) {
    this.currentMessage$ = messageService.current$.pipe(tap(message => {
      message && console.log(message);
    }));
  }
}
