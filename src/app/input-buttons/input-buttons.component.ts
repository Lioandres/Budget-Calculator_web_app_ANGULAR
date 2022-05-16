import { Component, forwardRef,OnInit } from '@angular/core';
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





  value:any=0
  increase(){
   
    this.value++
    this.onChange(this.value)
  }

  decrease(){
   
    this.value--
    this.onChange(this.value)
    
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
