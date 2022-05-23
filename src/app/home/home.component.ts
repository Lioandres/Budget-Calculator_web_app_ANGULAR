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

  web:(string|null)='';
  seo:(string|null)='';
  google:(string|null)='';
  
  constructor(private auxServices:QuotationService,
             private activatedRoute:ActivatedRoute,
             private ruta:Router
             ) {

              this.products$ = this.activatedRoute.queryParams.pipe(switchMap(params => {
                const filters = {
                  googleProduct: params.googleProduct || false,
                  webProduct: params.webProduct || false
                };
                return this.productService.getProducts(filters);
              }));
            }
            //https://www.hjorthhansen.dev/url-as-state-in-angular/

              
  ngOnInit() {
 
 
this.web=this.activatedRoute.snapshot.paramMap.get('webProduct')
 this.seo=this.activatedRoute.snapshot.paramMap.get('seoProduct')
 this.google=this.activatedRoute.snapshot.paramMap.get('googleProduct')

 this.activatedRoute.params
 .subscribe(({googleProduct})=> {
  console.log(googleProduct) 
  })




}
// updateQueryParameters(){
// this.ruta.navigate([],
//                   { 
//                     queryParams:{
//                       genre:'rpg'
//                     },
//                     queryParamsHandling:'merge'
//                    }
//                    )
// }







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
