// types.ts

export interface Product {
             "id": number,
            "title": string,
            "price": number,
            "discountPercentage": number,
            "rating": number,
            "brand": string,
            "category": string,
            "thumbnail": string,
       
  }
  
  export interface Data {
    products: Product[];
  }
  