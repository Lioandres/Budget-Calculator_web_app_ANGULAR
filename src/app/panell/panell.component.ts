import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {


  constructor(private calcTotal:QuotationService) { }

  ngOnInit(): void {
  }

  myform:FormGroup= new FormGroup({
    'nombre':new FormControl ('RTX4080ti')
  })

@Input() totalPrice=0
@Output() sendTotalToHome:EventEmitter<number>=new EventEmitter<number>();

   numPages:number=0
   numLanguages:number=0
   totalQuotation:number=0
  
 calculate(){
    let totalToSend:number= this.calcTotal.calculateTotal(this.totalPrice,this.numPages,this.numLanguages)
    this.sendTotalToHome.emit(totalToSend)
   }
  }


  


