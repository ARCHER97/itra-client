import { Component } from '@angular/core';

import { AdminService } from './services/admin.service';
import { LocalizationService } from './services/localization.service';

import { authState } from './global/authstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private localizationService: LocalizationService, private adminService: AdminService){
    this.adminService.isAdmin().then(res => {
      authState.adminState = res;
    })
    this.localizationService.updataeLocalization("en")
  }

}
