import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }

    
  numPages:string=''
  numLanguages:string=''

  presupuestoTotla(a:number,b:number){
    a+b
  }


}
