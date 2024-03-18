import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, catchError, retry, throwError, timer} from 'rxjs';
import {Message, MessageService} from "../../../shared/services/message/message.service";


@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({

        count: 2, delay: (error, retryCount: number) => {
          if (error && [500, 502, 503, 504].includes(error.status)) return timer(retryCount * 1500);
          throw error;
        }
      }),
      catchError(error => {
        console.trace('interceptor')
        console.log('Interceptor Error')
        const message = parseError(error);
        message && this.messageService.updateMessage(message);
        return throwError(() => error);
      })
    );
  }
}


function parseError(error: any): Message | null {

  if (error?.status === 404) {
    return {text: error.error.detail, type: 'UnpredictedError'};
  }

  if (error?.status === 500) {
    return {text: error.error.detail, type: 'InternalServerError'};
  }

  if (error?.status === 503) {
    return {text: error.error.detail, type: 'ServerUnavailable'};
  }

  if (error?.status === 504) {
    return {text: error.error.detail, type: 'ConnectionError'};
  }

  if (error?.status === 408) {
    return {text: error.error.detail, type: 'TimeoutError'};
  }

  return null;
}
