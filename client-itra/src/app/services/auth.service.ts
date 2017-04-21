import { Injectable } from '@angular/core';

import { authState } from '../global/authstate';

@Injectable()
export class AuthService {

  constructor() { }

  login(){
    authState.authState = !authState.authState;
  }

  logout(){
    authState.authState = !authState.authState;
  }
}
