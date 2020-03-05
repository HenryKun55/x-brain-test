import { call } from 'redux-saga/effects';
import { Product } from '../../../types/Product';

import { addProductToCart, clearCart } from './actions';

export function* addToCart(payload: any) {
  const product: Product = payload;
  yield call(addProductToCart, product);
}

export function* clear() {
  yield call(clearCart);
}
