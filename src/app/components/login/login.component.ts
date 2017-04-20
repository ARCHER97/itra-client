import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { Profile } from '../../model/profile';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  
  constructor(private authService: AuthService, private router :Router) { 
    this.user = new User("","");
  }

  submit(){
    localStorage.setItem('jwt','token|123456789');
    if(this.authService.isSignedIn()) this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
