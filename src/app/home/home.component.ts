import { Component, OnInit } from '@angular/core';
import { QuotationService } from '../quotation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subTotal:number=0
  addExtra:number=0


  webProduct:boolean=false
  addWeb() {
    if(this.webProduct) this.subTotal+=500
    else {
      this.subTotal-=500
      this.addExtra=0
    }
  }

  seoProduct:boolean=false
  addSeo() {
    if(this.seoProduct) this.subTotal+=300
    else this.subTotal-=300
  }

  googleProduct:boolean=false
  addGoogle() {
    if(this.googleProduct) this.subTotal+=200
    else this.subTotal-=200
  }

  showTotal(event:number){
    if (this.webProduct) this.addExtra=event
    
  }


}
