import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';

import { AuthState } from './ducks/auth/types';
import { ProductState } from './ducks/product/types';

import reducers from './ducks';
import rootSaga from './ducks/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export interface ApplicationState {
  auth: AuthState;
  product: ProductState;
}

export default store;
