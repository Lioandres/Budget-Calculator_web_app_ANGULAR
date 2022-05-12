import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor() { }

    
 

  calculateTotal(subtotal:number,pages:number,languages:number){
    let total=subtotal+(pages+languages)*30
    console.log(`èl precio total es ${total}`)
    console.log(pages)
    console.log(languages)
    return total
   }


}
