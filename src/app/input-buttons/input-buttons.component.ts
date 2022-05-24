import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-buttons',
  templateUrl: './input-buttons.component.html',
  styleUrls: ['./input-buttons.component.css'],

  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputButtonsComponent),
      multi:true
    }
  ]

})
export class InputButtonsComponent implements OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit(): void {
  }


@Output() sendToCalculate:EventEmitter<any>=new EventEmitter<number>();


  languages:any=0

  
  increase(){
    this.languages++
    this.onChange(this.languages)
    this.onTouch(this.languages)
    this.sendToCalculate.emit()
  }

  decrease(){
    this.languages--
    this.onChange(this.languages)
    this.onTouch(this.languages)
    this.sendToCalculate.emit()
    
  }
  calcManualEnter(){
    this.onChange(this.languages)
    this.onTouch(this.languages)
    this.sendToCalculate.emit()
  }
  
  
onChange:any =() => {}
onTouch:any=()=>{}
disabled:boolean=false

writeValue(languagesI:number):void{
this.languages=languagesI

}

registerOnChange(fn:any):void{
  this.onChange=fn  //Call to the same function onChange
}


registerOnTouched(fn:any):void{
  this.onTouch=fn
}

SetDissableState (state:boolean):void{
  this.disabled=state
}
}
