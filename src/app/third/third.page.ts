import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  source : any = {};

  constructor(  private router          : Router,
                private activatedRoute  : ActivatedRoute) { 

    // subscribe to the Activated Router Querry Params
    this.activatedRoute.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {

        this.source = this.router.getCurrentNavigation().extras.state;

      }
    });

   }

  ngOnInit() {
  }

}
