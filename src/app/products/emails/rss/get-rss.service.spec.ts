import { TestBed } from '@angular/core/testing';

import { GetRssService } from './get-rss.service';

describe('GetRssService', () => {
  let service: GetRssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
