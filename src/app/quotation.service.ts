import { Injectable } from '@angular/core';
import { Quotation, Services } from './interfaces/quotation.intarface';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() {
    //this._quotationList=JSON.parse(localStorage.getItem('quotationList')!)||[]
   }


  calcTotal(webProduct:boolean,seoProduct:boolean,googleProduct:boolean,addExtra:number):number {
    let total:number=0
    if(webProduct) total=500+addExtra
    else total=0
    if(seoProduct) total+=300
    if(googleProduct) total+=200
    return total
  }

  calculateExtraToAdd(pages:number,languages:number){
    let extraToAdd=(pages+languages)*30
    return extraToAdd
   }

   _quotationList:Quotation[]=[]

  get quotationList():Quotation[] {
    return [...this._quotationList]
  }

  
 addQuotation (quotName:string,clientName:string,services:Services,price:number) {

   let quotation={
    quotationName:quotName,
    clientName:clientName,
    services:services,
    price:price,
    date:new Date().toISOString()
   }
   this._quotationList.unshift(quotation)
   console.log(this._quotationList)
   localStorage.setItem('quotationList',JSON.stringify(this._quotationList))
 }

 toOrderAlfaux(){
   let quotationSorted=[...this._quotationList]
   quotationSorted.sort((a,b)=>{
     if (a.quotationName > b.quotationName) return 1
     if (a.quotationName < b.quotationName) return -1
     return 0
    })
    return quotationSorted
}

toOrderDateaux(){
  let quotationListDate=[...this._quotationList]   
  quotationListDate.sort((a,b)=>{
    if (a.date > b.date) return 1
    if (a.date < b.date) return -1
    return 0
   })
   return quotationListDate
}

toReOderaux(){
  this._quotationList=[]
}

findQuotationsnaux(keyWord:string) {
let h
 h=this._quotationList.filter(quotation=>quotation.quotationName===keyWord?? quotation)
console.log (h)
 return h} 






}


