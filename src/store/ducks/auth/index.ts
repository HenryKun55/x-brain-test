import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';
import { setStorage, removeStorage } from '../../../util';

const INITIAL_STATE: AuthState = {
  data: {
    email: '',
    genre: '',
    name: '',
    price: 0,
  },
};

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH:
      setStorage('@user', action.payload.user);
      return { ...state, data: { ...action.payload.user } };
    case AuthTypes.REMOVE_AUTH:
      removeStorage('@user');
      return { ...state, data: {} };
    default:
      return state;
  }
};

export default auth;
