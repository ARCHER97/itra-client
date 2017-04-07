import { Component, OnInit } from '@angular/core';

import { User } from '../../model/user'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  users: Array<User>
  constructor() { 
    this.users = new Array();
    this.users.push(new User(1,'user', 'jon', 1900, 100, 40));
    this.users.push(new User(2,'user', 'jon1', 1901, 101, 41));
    this.users.push(new User(3,'user', 'jon2', 1902, 102, 42));
    this.users.push(new User(4,'user', 'jon3', 1903, 103, 43));
  }

  ngOnInit() {
  }

}
