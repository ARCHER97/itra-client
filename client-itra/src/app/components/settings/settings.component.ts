import { Component, OnInit } from '@angular/core';

import { navbarStyle } from '../../global/navbarstyle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  navbarStyle = navbarStyle;

  constructor() { }

  ngOnInit() {
  }

  dark(){
    navbarStyle.navbarStyleDark = true;
    navbarStyle.navbarStyleWhite = false;
  }

  white(){
    navbarStyle.navbarStyleDark = false;
    navbarStyle.navbarStyleWhite = true;
  }

  darkBody(){
    document.body.style.backgroundColor = '#845e99'
  }

  whiteBody(){
    document.body.style.backgroundColor = '#ffffff'
  }
}
