import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../interfaces/quotation.intarface';
import { QuotationService } from '../quotation.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auxServices:QuotationService) { }

  ngOnInit(
    
  ): void {
 console.log(this.services.toString()) }

  @Input() started:boolean=true

  total:number=0
  addExtra:number=0
  webProduct:boolean=false
  seoProduct:boolean=false
  googleProduct:boolean=false

  services:Services={
    webProductService:this.webProduct,
    seoProductService:this.seoProduct,
    googleProductService:this.googleProduct
  }

  showTotal(){
    if (!this.webProduct) this.addExtra=0
   this.total=this.auxServices.calcTotal(this.webProduct,this.seoProduct,this.googleProduct,this.addExtra)
    }

  addExtraToTotal(event:number){
  this.addExtra=event
  this.total=this.auxServices.calcTotal(this.webProduct,this.seoProduct,this.googleProduct,this.addExtra)
  console.log(event)  
  }


  addQuotByService(quotInfo:[string,string]){
    this.auxServices.addQuotation(quotInfo[0],quotInfo[1],this.services,this.total)
  }
  
}
