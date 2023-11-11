import { TestBed } from '@angular/core/testing';

import { EmailserveService } from './emailserve.service';

describe('EmailserveService', () => {
  let service: EmailserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
