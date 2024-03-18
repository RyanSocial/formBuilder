import {TestBed} from '@angular/core/testing';

import {Message, MessageService} from './message.service';

const mockMessage: Message = {
  text: 'There was an error',
  type: 'FetchingData',
  hideDelay: 3000

}

describe('MessageService', () => {
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    messageService = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(messageService).toBeTruthy();
  });
  describe('Initial State', () => {
    it('Should have a null initial error', () => {
      expect(messageService.currentSubject$.value).toBe(null)
    })
    describe('updating the value', () => {
      it('Should update the value of message', () => {
        messageService.updateMessage(mockMessage)
        expect(messageService.currentSubject$.value).toEqual(mockMessage)
      })
      it('should console log and error', () => {
        messageService.updateMessage(mockMessage)
      })
    })
  })
});
