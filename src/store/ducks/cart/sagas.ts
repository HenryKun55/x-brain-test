import { call } from 'redux-saga/effects';
import { Product } from '../../../types/Product';

import { addProductToCart } from './actions';

export default function* addToCart(payload: any) {
  const product: Product = payload;
  yield call(addProductToCart, product);
}
