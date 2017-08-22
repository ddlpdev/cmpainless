import { TestBed, inject } from '@angular/core/testing';

import { WaffleService } from './waffle.service';

describe('WaffleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaffleService]
    });
  });

  it('should be created', inject([WaffleService], (service: WaffleService) => {
    expect(service).toBeTruthy();
  }));
});
