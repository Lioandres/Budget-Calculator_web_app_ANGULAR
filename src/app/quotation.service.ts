import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }


 

  calculateTotal(a:number,b:number){
    let total=(a+b)*30
    console.log(`èl precio total es ${total}`)
    console.log('pades :'+ a)
    console.log('languages: '+b)
    console.log(total)
    return total
   }


}
