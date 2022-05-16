import { Component, forwardRef, Input, OnInit } from '@angular/core';
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

 @Input() min:number=0
 @Input() max:number=10000000



  value:number=0
  increase(){
    if(typeof this.min==='undefined'|| this.value<this.max) {
    this.value++}
    this.onChange(this.value)
  }

  decrease(){
        if(typeof this.max==='undefined'|| this.value>this.min) {
    this.value--}
    this.onChange(this.value)
  }
  
onChange:any =() => {}
onTouch:any=()=>{}
disabled=false

writeValue(value:number):void{
this.value=value
}

registerOnChange(fn:any):void{
  this.onChange=fn
}


registerOnTouched(fn:any):void{
  this.onChange=fn
}

SetDissableState?(isDisabled:boolean):void{
  this.disabled=isDisabled
}
}
