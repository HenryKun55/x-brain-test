import { Reducer } from 'redux';
import { ProductState, ProductTypes } from './types';

const INITIAL_STATE: ProductState = {
  data: [],
};

/**
 * Reducer
 */
const product: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCTS_REQUEST:
      return { ...state };
    case ProductTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default product;
