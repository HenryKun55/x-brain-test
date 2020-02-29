import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  data: {
    email: '',
    genre: '',
    name: '',
  },
};

/**
 * Reducer
 */
const auth: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.AUTH:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default auth;
