import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { globalSettings } from '../../global/global-settings';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  globalSettings = globalSettings;
  
  constructor(private authService: AuthService, private router: Router) {
    this.globalSettings.authStatus = this.authService.isSignedIn();
  }

  logout(){
    this.authService.logout();
    this.globalSettings.authStatus = this.authService.isSignedIn();
    setTimeout(this.router.navigate(['/']), 100); 
  }
}
