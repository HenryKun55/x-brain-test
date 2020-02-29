import { put, call } from 'redux-saga/effects';
import { Product } from '../../../types/Product';

import getProductsApi from '../../../services/products';

import { setProducts, addProduct, removeProduct } from './actions';

export function* get() {
  const data = yield call(getProductsApi);
  yield put(setProducts(data));
}

export function* add(payload: any) {
  const product: Product = payload;
  yield put(addProduct(product));
}

export function* remove(payload: any) {
  const product: Product = payload;
  yield put(removeProduct(product));
}
