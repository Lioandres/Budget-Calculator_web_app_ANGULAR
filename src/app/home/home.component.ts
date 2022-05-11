import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  totalPrice:number=0

  webProduct:boolean=false
  addWeb() {
    if(this.webProduct) this.totalPrice+=500
    else this.totalPrice-=500
  }

  seoProduct:boolean=false
  addSeo() {
    if(this.seoProduct) this.totalPrice+=300
    else this.totalPrice-=300
  }

  googleProduct:boolean=false
  addGoogle() {
    if(this.googleProduct) this.totalPrice+=200
    else this.totalPrice-=200
  }





}
