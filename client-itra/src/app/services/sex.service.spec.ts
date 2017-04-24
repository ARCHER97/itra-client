/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SexService } from './sex.service';

describe('SexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SexService]
    });
  });

  it('should ...', inject([SexService], (service: SexService) => {
    expect(service).toBeTruthy();
  }));
});
