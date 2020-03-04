import { combineReducers } from 'redux';
import { reducer } from 'redux-form';
import auth from './auth';
import product from './product';
import cart from './cart';

export default combineReducers({
  auth,
  product,
  cart,
  form: reducer,
});
