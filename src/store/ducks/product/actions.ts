import { action } from 'typesafe-actions';
import { ProductTypes } from './types';
import { Product } from '../../../types/Product';

export const getProducts = () => action(ProductTypes.GET_PRODUCTS_REQUEST);

export const setProducts = (products: Product[]) => action(ProductTypes.GET_PRODUCTS_SUCCESS, products);

export const addProduct = (product: Product) => action(ProductTypes.PRODUCT_INSERT, product);

export const removeProduct = (product: Product) => action(ProductTypes.PRODUCT_REMOVE, product);
