import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  authLogin(){
    this.authService.login(this.login, this.password).then(res => {
        if(this.authService.isSignedIn()) this.router.navigate(['/profiles-preview']);
    });
  }

}
