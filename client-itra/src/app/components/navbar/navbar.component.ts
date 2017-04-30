import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { navbarStyle } from '../../global/navbarstyle';
import { authState } from '../../global/authstate';
import { localization } from '../../global/localizationContext';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarStyle = navbarStyle;
  authState = authState;
  localization = localization;
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
    this.router.navigate(['/auth']);
  }

  logout(){
    this.authService.logout();
  }

  search(){
    this.router.navigate(['/search', this.searchValue]);
    this.searchValue = "";
  }

  routeToMyProfile(){
    this.authService.getNumberOfMyProfile().then(res => {
      let link: string = '/admin/profile/'+res;
      this.router.navigate([link]);
    })
  }

}
