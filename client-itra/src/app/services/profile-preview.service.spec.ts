/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProfilePreviewService } from './profile-preview.service';

describe('ProfilePreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilePreviewService]
    });
  });

  it('should ...', inject([ProfilePreviewService], (service: ProfilePreviewService) => {
    expect(service).toBeTruthy();
  }));
});
