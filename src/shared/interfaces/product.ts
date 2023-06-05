import { type ProductType } from '@/enums';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  type: ProductType;
  discount: number;
  photo: string;
}
