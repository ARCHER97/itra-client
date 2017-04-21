import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { authState } from '../../global/authstate';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authState = authState;
  searchValue: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.searchValue = "";
  }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

  search(){
    this.router.navigate(['/search', this.searchValue]);
    this.searchValue = "";
  }

}
