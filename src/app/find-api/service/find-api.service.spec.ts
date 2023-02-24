import { TestBed } from '@angular/core/testing';

import { FindApiService } from './find-api.service';

describe('FindApiService', () => {
  let service: FindApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
