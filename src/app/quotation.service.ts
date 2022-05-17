import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }


 

  calculateTotal(pages:number,languages:number){
    let extra=(pages+languages)*30
    console.log(`el precio a agregar es ${extra}`)
    console.log('paginas :'+ pages)
    console.log('languages: '+languages)
    console.log(extra)
    return extra
   }


}
