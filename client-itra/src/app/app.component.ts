import { Component } from '@angular/core';

import { AdminService } from './services/admin.service';

import { authState } from './global/authstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private adminService: AdminService){
    this.adminService.isAdmin().then(res => {
      authState.adminState = res;
    })
  }

}
