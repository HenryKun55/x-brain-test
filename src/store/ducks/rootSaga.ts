import { all, takeLatest } from 'redux-saga/effects';

//  Auth
import { AuthTypes } from './auth/types';
import authUser from './auth/sagas';

// Product
import { ProductTypes } from './product/types';
import getProducts from './product/sagas';

// Cart
import { CartTypes } from './cart/types';
import addToCart from './cart/sagas';

export default function* rootSaga() {
  yield all([
    // Auth
    takeLatest(AuthTypes.AUTH, authUser),

    // Product
    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),

    // Cart
    takeLatest(CartTypes.ADD_TO_CART, addToCart),

  ]);
}
