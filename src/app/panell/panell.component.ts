import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { QuotationService } from '../quotation.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {


  constructor(private calcTotal:QuotationService,
              private fb:FormBuilder) { }

 
  myform:FormGroup= this.fb.group({
    pages:[0,[Validators.required,Validators.min(0),Validators.pattern('^([1-9]+\\d*)|[0]')]],
    languages:[0,[Validators.required,Validators.min(0),Validators.pattern('^([1-9]+\\d*)|[0]')]]
  })


  ngOnInit(): void {
  }


@Output() sendTotalToHome:EventEmitter<number>=new EventEmitter<number>();

   
   
  
 calculate(evt:any){
   let extraToAdd=(parseInt(this.myform.get('pages')?.value) +parseInt(this.myform.get('languages')?.value))*30
    this.sendTotalToHome.emit(extraToAdd)
    console.log(evt)
   
    

  }
}


  


