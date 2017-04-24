/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypeOfPhotoService } from './type-of-photo.service';

describe('TypeOfPhotoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeOfPhotoService]
    });
  });

  it('should ...', inject([TypeOfPhotoService], (service: TypeOfPhotoService) => {
    expect(service).toBeTruthy();
  }));
});
