import { TestBed } from '@angular/core/testing';

import { DivisionsSelectService } from './divisions-select.service';

describe('DivisionsSelectService', () => {
  let service: DivisionsSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DivisionsSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
