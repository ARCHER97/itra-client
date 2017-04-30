import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { AdminService } from '../../../services/admin.service';

import { authState } from '../../../global/authstate';
import { localization } from '../../../global/localizationContext';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  localization = localization;
  
  authState = authState;

  login: string;

  password: string;

  exeptionStatus = false;

  result = '';

  constructor(
    private authService: AuthService,
    private adminService: AdminService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
  }

  authLogin() {
    this.authService.login(this.login, this.password).then(res => {
        if(this.authService.isSignedIn()) {
          this.adminService.isAdmin().then(result => {
            authState.adminState = result;
            this.location.back();
          })
        } else this.exeptionStatus = true;
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
