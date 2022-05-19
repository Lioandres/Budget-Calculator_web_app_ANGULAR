import { Injectable } from '@angular/core';
import { QuotationList } from './interfaces/quotation.intarface';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }

  quotationList:QuotationList[]=[]

  calculateTotal(pages:number,languages:number){
    let extraToAdd=(pages+languages)*30
    return extraToAdd
   }





}
