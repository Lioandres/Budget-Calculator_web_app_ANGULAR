import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent implements OnInit {

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


