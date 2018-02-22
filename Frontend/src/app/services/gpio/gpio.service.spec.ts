import { TestBed, inject } from '@angular/core/testing';

import { GpioService } from './gpio.service';

describe('GpioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GpioService]
    });
  });

  it('should be created', inject([GpioService], (service: GpioService) => {
    expect(service).toBeTruthy();
  }));
});
