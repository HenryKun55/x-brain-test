import { action } from 'typesafe-actions';
import { CartTypes } from './types';
import { Product } from '../../../types/Product';

export const addProductToCart = (product: Product) => action(CartTypes.ADD_TO_CART, product);

export const clearCart = () => action(CartTypes.CLEAR_CART);
