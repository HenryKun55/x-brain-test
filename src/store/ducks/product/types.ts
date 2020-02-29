import { Product } from '../../../types/Product';

/**
 * Types
 */

export interface ProductState {
  data: Product[];
}

export enum ProductTypes {
  PRODUCT_INSERT = 'product/PRODUCT_INSERT',
  PRODUCT_REMOVE = 'product/PRODUCT_REMOVE',
  GET_PRODUCTS_REQUEST = 'product/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = 'product/GET_PRODUCTS_SUCCESS',
}
