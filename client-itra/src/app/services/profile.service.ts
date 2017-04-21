import { Injectable } from '@angular/core';

import { Profile } from '../model/profile';

@Injectable()
export class ProfileService {

  constructor() { }

  public getProfileById(id: number): Profile {
    return new Profile(1,'name1',1997,180,60,'man','all',0);
  }

}
