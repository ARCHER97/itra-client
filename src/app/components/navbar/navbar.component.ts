import { Component, OnInit } from '@angular/core';

import { globalSettings } from '../../global/global-settings'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  globalSettings = globalSettings;
  constructor() { }
}
