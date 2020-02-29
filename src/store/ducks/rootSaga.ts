import { all, takeLatest } from 'redux-saga/effects';

//  Auth
import { AuthTypes } from './auth/types';
import authUser from './auth/sagas';

// Product
import { ProductTypes } from './product/types';
import { get, add, remove } from './product/sagas';

export default function* rootSaga() {
  yield all([
    // Auth
    takeLatest(AuthTypes.AUTH, authUser),

    // Auth
    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, get),
    takeLatest(ProductTypes.PRODUCT_INSERT, add),
    takeLatest(ProductTypes.PRODUCT_REMOVE, remove),

  ]);
}
