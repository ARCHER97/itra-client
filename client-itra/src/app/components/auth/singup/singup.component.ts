import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth.service'
import { Profile } from '../../../model/profile';

import { authState } from '../../../global/authstate';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  profile: Profile = new Profile(0,'',0,0,0,'','',0)

  authState = authState;

  login: string;

  password: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  singup(){
    this.authService.singup(this.login, this.password, this.profile).then(res => {
       if(this.authService.isSignedIn()) this.router.navigate(['/profiles-preview']);
    });
  }

}
