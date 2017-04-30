/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PornoRecognitionService } from './porno-recognition.service';

describe('PornoRecognitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PornoRecognitionService]
    });
  });

  it('should ...', inject([PornoRecognitionService], (service: PornoRecognitionService) => {
    expect(service).toBeTruthy();
  }));
});
