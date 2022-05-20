import { Component, OnInit } from '@angular/core';
import { Quotation } from '../interfaces/quotation.intarface';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {

  
  constructor(private auxServices:QuotationService) { }

  ngOnInit(): void {
  }

   get quotationList(){
     return this.auxServices._quotationList
   }


  quotationSorted:Quotation[]=[]
  orderAlf:boolean=false
  toOrderAlfa(){
      this.orderAlf=true
      this.orderDate=false
      this.quotationSorted=this.auxServices.toOrderAlfaux()
  }
  
 quotationListDate:Quotation[]=[]  
  orderDate:boolean=false
  toOrderDate(){
    this.orderDate=true
    this.orderAlf=false
    this.quotationListDate=this.auxServices.toOrderDateaux()
  }

  toReOrder() {
    this.orderDate=false
    this.orderAlf=false
   }
}


