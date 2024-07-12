import { TestBed } from '@angular/core/testing';

import { ToggleSpinnerService } from './toggle-spinner.service';

describe('ToggleSpinnerService', () => {
  let service: ToggleSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
