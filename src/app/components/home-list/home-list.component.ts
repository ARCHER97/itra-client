import { Component } from '@angular/core';

import { TopService } from '../../services/top.service';
import { CardElement } from '../../model/card-element';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent {
  
  cards: Array<CardElement>;
  
  constructor(private topService: TopService) {
    this.topService.getTop(3).then(res=>{
      this.cards = res;
    });
  }

  public cardClick(){
    console.log("go to profile not admin");
  }

}
