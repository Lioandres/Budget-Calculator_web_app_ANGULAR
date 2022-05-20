import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotationService } from '../quotation.service';


@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css']
})
export class QuotationFormComponent implements OnInit {

  @Output() infoQuote:EventEmitter<[string,string]>=new EventEmitter
  
  quoteNa:string=''
  clientNa:string=''
  
  constructor(private auxServices:QuotationService) { }

  ngOnInit(): void {
  }


  sendQuotInfoToHome(){
    this.infoQuote.emit([this.quoteNa, this.clientNa])
   }

   get quotationList(){
     return this.auxServices._quotationList
   }

}
