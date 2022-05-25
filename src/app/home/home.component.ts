import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../interfaces/quotation.intarface';
import { QuotationService } from '../quotation.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(private auxServices:QuotationService,
            private activatedRoute:ActivatedRoute,
            ) {}
            

ngOnInit() {
 this.activatedRoute.queryParams
 .subscribe(params=>{
   this.webProduct=params['web'] || false
   this.seoProduct=params['seo'] || false
   this.googleProduct=params['google'] || false
   this.numPages=params['numPages'] || 0
   this.numLang=params['numLang'] || 0

   
 })
   
}              


  @Input() started:boolean=true
  

  total:number=0
  addExtra:number=0
  webProduct:boolean=false
  seoProduct:boolean=false
  googleProduct:boolean=false
  numPages:number=0
  numLang:number=0

 
  
  // showTotal(event:number){
  //   this.addExtra=event
  //   this.total=this.auxServices.calcTotal(this.webProduct,this.seoProduct,this.googleProduct,this.addExtra)
  //   console.log(event)
  //   }
 

  // addExtraToTotal(event:number){
  // this.addExtra=event
  // this.total=this.auxServices.calcTotal(this.webProduct,this.seoProduct,this.googleProduct,this.addExtra)
  // console.log(event)  
  // }

  showTotal(){
    if (!this.webProduct) this.addExtra=0
   this.total=this.auxServices.calcTotal(this.webProduct,this.seoProduct,this.googleProduct,this.addExtra)
    }
  
  setExtra(extra:any){
      this.addExtra=extra}

  

  addQuotByService(quotInfo:[string,string]){
    this.auxServices.addQuotation(
      quotInfo[0],
      quotInfo[1],
      {
        webProductService:this.webProduct,
        seoProductService:this.seoProduct,
        googleProductService:this.googleProduct,
        webPages:this.numPages,
        webLang:this.numLang
   
      },
      this.total)
    
  }

  addPageandLang(event:[number,number]){
    this.numPages=event[0]
    this.numLang=event[1]
 
  }
  
}
