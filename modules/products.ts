export interface PriceHistory {
    price: number;
    date: string;
  }
  
  export interface CustomerRating {
    username: string;
    firstName: string;
    lastName: string;
    gender: string;
    age: string;
    area: string;
    address: string;
    stars: number;
    date: string;
    verifiedUser: boolean;
  }
  
  export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    stock: number;
    countryOfOrigin: string;
    firstAvailable: string;
    priceHistory: PriceHistory[];
    customerRatings: CustomerRating[];
  }
  