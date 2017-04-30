import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../../services/localization.service';

import { navbarStyle } from '../../global/navbarstyle';
import { localization } from '../../global/localizationContext';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  localization = localization;
  navbarStyle = navbarStyle;

  constructor(private localizationService: LocalizationService) { }

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
    document.body.style.backgroundColor = '#fafafa'
  }

  ruLang() {
    this.localizationService.updataeLocalization('ru');
  }

  enLang() {
    this.localizationService.updataeLocalization('en');
  }

}
