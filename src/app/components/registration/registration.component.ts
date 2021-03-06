import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { Profile } from '../../model/profile';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  profile: Profile;
  
  constructor(private authService: AuthService, private router :Router) { 
    this.user = new User("","");
    this.profile = new Profile(1, "test-name", 1997, 180, 60, "man", "woman");
  }

  submit(){
    localStorage.setItem('jwt','token|123456789');
    if(this.authService.isSignedIn()) this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
