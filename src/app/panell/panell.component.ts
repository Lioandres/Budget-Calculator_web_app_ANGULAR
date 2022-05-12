import { Component, Input, OnInit } from '@angular/core';

import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  constructor(calcTotal:QuotationService) { }

  ngOnInit(): void {
  }

@Input() totalPrice=0

   numPages:number=0
   numLanguages:number=0
   totalQuotation:number=0
  

   calculateTotal(){
    this.totalQuotation=this.totalPrice+(this.numPages+this.numLanguages)*30
    console.log(`èl precio total es ${this.totalQuotation}`)
    console.log(this.numPages)
    console.log(this.numLanguages)
   }
  }


  


