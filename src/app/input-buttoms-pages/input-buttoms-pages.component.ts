import { Component, EventEmitter, forwardRef, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-buttoms-pages',
  templateUrl: './input-buttoms-pages.component.html',
  styleUrls: ['./input-buttoms-pages.component.css'],

  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputButtomsPagesComponent),
      multi:true
    }
  ]
})
export class InputButtomsPagesComponent implements  OnInit, ControlValueAccessor {

  constructor() { }

  ngOnInit(): void {
  }


@Output() sendToCalculatePages:EventEmitter<any>=new EventEmitter<number>();


  pages:any=0

  
  increase(){
    this.pages++
    this.onChange(this.pages)
    this.onTouch(this.pages)
    this.sendToCalculatePages.emit()
  }

  decrease(){
    this.pages--
    this.onChange(this.pages)
    this.onTouch(this.pages)
    this.sendToCalculatePages.emit()
    
  }
  calcManualEnter(){
    this.onChange(this.pages)
    this.onTouch(this.pages)
    this.sendToCalculatePages.emit()
  }
  
  
onChange:any =() => {}
onTouch:any=()=>{}
disabled:boolean=false

writeValue(valueI:number):void{
this.pages=valueI

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
