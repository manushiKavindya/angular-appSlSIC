import { TestBed } from '@angular/core/testing';

import { FiveDService } from './fived.service';

describe('IsicService', () => {
  let service: FiveDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiveDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
