export interface Product {
    id?: number; // Optional ID for the product, can be used for updates or deletion
    name: string;
    description: string;
    imageUrl: string;
    price: number;
  }
  