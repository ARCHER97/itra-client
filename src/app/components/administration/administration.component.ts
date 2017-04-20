import { Component, OnInit } from '@angular/core';

import { CardElement } from '../../model/card-element'

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {
  users: Array<CardElement>
  constructor() { 
    this.users = new Array();
    this.users.push(new CardElement('user1', 0, 'url1'));
    this.users.push(new CardElement('user2', 0, 'url2'));
    this.users.push(new CardElement('user3', 0, 'url3'));
    this.users.push(new CardElement('user4', 0, 'url4'));
  }

  ngOnInit() {
  }

}
