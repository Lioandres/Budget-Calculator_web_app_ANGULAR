import { Injectable } from '@angular/core';
import { Quotation } from './interfaces/quotation.intarface';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }

  _quotationList:Quotation[]=[]



  calculateTotal(pages:number,languages:number){
    let extraToAdd=(pages+languages)*30
    return extraToAdd
   }


  get quotationList():Quotation[] {
    return [...this._quotationList]
  }

 addQuotation (quotNumber:number,clientName:string,services:string,price:number,date:string) {

   let quotation={
    quotationNumber:quotNumber,
    clientName:clientName,
    services:services,
    price:price,
    date:date
   }
   this._quotationList.push(quotation)
   console.log(this._quotationList)

 }


}


