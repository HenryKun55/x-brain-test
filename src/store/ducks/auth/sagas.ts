import { call } from 'redux-saga/effects';

import { auth, removeAuth } from './actions';

export function* authUser(payload: any) {
  yield call(auth, payload);
}

export function* removeUser() {
  yield call(removeAuth);
}
