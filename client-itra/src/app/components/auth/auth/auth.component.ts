import { Component, OnInit } from '@angular/core';

import { localization } from '../../../global/localizationContext';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  localization = localization;

  constructor() { }

  ngOnInit() {
  }

}
