/* eslint-disable no-param-reassign */
import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';
import { Product } from '../../../types/Product';

const INITIAL_STATE: CartState = {
  data: [],
};

/**
 * Reducer
 */
const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.ADD_TO_CART:
      if (state.data.find((_p) => _p.description === action.payload.description)) {
        const p = state.data.findIndex((_p) => _p.description === action.payload.description);
        const update: Product = { ...state.data[p], amount: action.payload.amount };
        return { ...state, data: [...state.data.slice(0, p), update, ...state.data.slice(p + 1)] };
      }
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
};

export default cart;
