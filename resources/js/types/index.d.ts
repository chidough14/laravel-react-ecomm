import { Config } from 'ziggy-js';

export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
  created_at: string;
  permissions: string[];
  roles: string[];
}

export type Product = {
  id: number;
  title: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
  images: Image[];
  description: string;
  short_description: string;
  user: {
    id: number;
    name: string;
  };
  department: {
    id: number;
    name: string;
  };
  variationTypes: variationType[];
  variations: Array<{
    id: number;
    variation_type_option_ids: number[];
    quantity: number;
    price: number;
  }>;
}

export type PaginatedProps<T> = {
  data: Array<T>;
}

export type Image = {
  id: number;
  thumb: string;
  small: string;
  large: string;
}

export type variationTypeOption = {
  id: number;
  name: string;
  images: Image[];
  type: variationType;
}

export type variationType = {
  id: number;
  name: string;
  type: 'Select' | 'Radio' | 'Image';
  options: variationTypeOption[]
}

export type CartItem = {
  id: number;
  product_id: number;
  title: string;
  slug: string;
  price: number;
  quantity: number;
  image: string;
  optionIds: Record<string, number>;
  options: variationTypeOption[];
}

export type paginatedData<T = any> = {
  data: T[];
  roles: Record<string, string>
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
  ziggy: Config & { location: string };
  totalPrice: number;
  totalQuantity: number;
  cartItems: CartItem[];
};
