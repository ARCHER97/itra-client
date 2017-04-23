import { Injectable } from '@angular/core';

import { UserInfo } from '../model/user-info';

@Injectable()
export class AdminService {

  constructor() { }

  getUserInfo(): Array<UserInfo> {
    let users: Array<UserInfo> = new Array();
    users.push(new UserInfo(1,'name1',1997,60,180,'man','all',0,'user'))
    users.push(new UserInfo(2,'name2',1991,63,181,'man','all',0,'user'))
    users.push(new UserInfo(3,'name3',1993,62,110,'woman','all',0,'user'))
    return users;
  }

}
