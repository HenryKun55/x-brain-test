import { Reducer } from 'redux';
import { ProductState, ProductTypes } from './types';

const INITIAL_STATE: ProductState = {
  data: [],
};

/**
 * Reducer
 */
const auth: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.GET_PRODUCTS_REQUEST:
      return { ...state };
    case ProductTypes.GET_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload };
    case ProductTypes.PRODUCT_INSERT:
      return { ...state, data: [...state.data, action.payload] };
    case ProductTypes.PRODUCT_REMOVE:
      return { ...state, data: state.data.filter((product) => product !== action.payload) };
    default:
      return state;
  }
};

export default auth;
