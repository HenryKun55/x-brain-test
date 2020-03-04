import { Product } from '../../../types/Product';

/**
 * Types
 */

export interface CartState {
  data: Product[];
}

export enum CartTypes {
  ADD_TO_CART = 'product/ADD_TO_CART',
}
