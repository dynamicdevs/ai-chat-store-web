import { type ProductType } from '@/enums';

export interface Product {
  id: number;
  name: string;
  description: string;
  descriptionLong: string;
  price: number;
  type: ProductType;
  discount: number;
  photos: string[];
  sku: string;
}
