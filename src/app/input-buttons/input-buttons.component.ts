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


  value:any=0

  
  increase(){
    this.value++
    this.onChange(this.value)
    this.onTouch(this.value)
    this.sendToCalculate.emit()
  }

  decrease(){
    this.value--
    this.onChange(this.value)
    this.onTouch(this.value)
    this.sendToCalculate.emit()
    
  }
  calcManualEnter(){
    this.onChange(this.value)
    this.onTouch(this.value)
    this.sendToCalculate.emit()
  }
  
  
onChange:any =() => {}
onTouch:any=()=>{}
disabled:boolean=false

writeValue(valueI:number):void{
this.value=valueI

}

registerOnChange(fn:any):void{
  this.onChange=fn  //llama  a la funcion misma onChange
}


registerOnTouched(fn:any):void{
  this.onTouch=fn
}

SetDissableState (state:boolean):void{
  this.disabled=state
}
}
