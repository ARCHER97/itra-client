import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../../services/auth.service'

import { authState } from '../../../global/authstate';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authState = authState;

  login: string;

  password: string;

  exeptionStatus = false;

  result = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  authLogin() {
    this.authService.login(this.login, this.password).then(res => {
        if(this.authService.isSignedIn()) this.location.back();
        else this.exeptionStatus = true;
    });
  }

  twiter() {
    console.log("twiter")
  }

  facebook() {
    console.log("facebook")
  }

  canLogin(){
    return this.login != "" && this.password != "" ; 
  } 

}
