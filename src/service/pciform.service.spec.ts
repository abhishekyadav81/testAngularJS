import { TestBed, inject } from '@angular/core/testing';

import { PciFormService } from './pciform.service';

describe('PciformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PciFormService]
    });
  });

  it('should be created', inject([PciFormService], (service: PciFormService) => {
    expect(service).toBeTruthy();
  }));
});
