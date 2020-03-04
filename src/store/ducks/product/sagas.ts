import { put, call } from 'redux-saga/effects';

import getProductsApi from '../../../services/products';

import { setProducts } from './actions';

export default function* getProducts() {
  const data = yield call(getProductsApi);
  yield put(setProducts(data));
}
