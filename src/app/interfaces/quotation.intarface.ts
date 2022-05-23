export{Quotation,Services}

interface Quotation {
    quotationName:string,
    clientName:string,
    services:Services,
    price:number,
    date:string
}

interface Services {
    webProductService:boolean,
    seoProductService:boolean,
    googleProductService:boolean,
    webPages:number,
    webLang:number

}