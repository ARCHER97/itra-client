import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serach',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.css']
})
export class SerachComponent implements OnInit {
  searchValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if(this.route.snapshot.params['value'] != null)
      this.searchValue = this.route.snapshot.params['value'];
    else this.searchValue = "";
  }

  search(){
    this.router.navigate(['/search', this.searchValue]);
  }

}
