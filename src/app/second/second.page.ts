import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  myId: any;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {


    this.myId = this.activatedRoute.snapshot.paramMap.get('myId');
  }

}
