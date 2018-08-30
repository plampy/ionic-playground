import { TestBed, inject } from '@angular/core/testing';

import { SecondDataService } from './second-data.service';

describe('SecondDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecondDataService]
    });
  });

  it('should be created', inject([SecondDataService], (service: SecondDataService) => {
    expect(service).toBeTruthy();
  }));
});
