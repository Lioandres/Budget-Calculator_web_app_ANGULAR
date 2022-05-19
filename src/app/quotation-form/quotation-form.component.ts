import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotationService } from '../quotation.service';


@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {

  @Output() info:EventEmitter<[number,string]>=new EventEmitter
  
  quoteNu:number=0
  clientNa:string=''
  
  constructor(private auxServices:QuotationService) { }

  ngOnInit(): void {
  }


  sendQuotInfoToHome(){
    this.info.emit([this.quoteNu, this.clientNa])
   }

   get quotationList(){
     return this.auxServices._quotationList
   }

}
