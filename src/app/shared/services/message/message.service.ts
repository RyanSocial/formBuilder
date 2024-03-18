import {Injectable} from '@angular/core';

import {BehaviorSubject, filter, switchMap, timer} from "rxjs";

export type MessageType =
  | 'SearchMessage'
  | 'ConnectionError'
  | 'TimeoutError'
  | 'ServerUnavailable'
  | 'InternalServerError'
  | 'FetchingData'
  | 'UnpredictedError';

export interface Message {
  text: string,
  hideDelay?: number, // milliseconds
  type: MessageType,

}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  currentSubject$ = new BehaviorSubject<Message | null>(null);
  current$ = this.currentSubject$.asObservable();

  constructor() {
    this.initAutoHiding()
  }
  updateMessage(message: Message) {
    this.currentSubject$.next(message)
  }

  private initAutoHiding(): void {
    this.currentSubject$.pipe(
      filter(msg => msg !== null),
      switchMap(message =>
        timer(message!.hideDelay || 5000)
      )).subscribe({
      next: () => {
        this.currentSubject$.next(null);
      },
      error: error => console.error(`MessageServiceError: ${error}`)
    });
  }
}
