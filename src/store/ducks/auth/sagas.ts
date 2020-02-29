import { put } from 'redux-saga/effects';
import { User } from '../../../types/User';

import auth from './actions';

export default function* authUser(payload: any) {
  const user: User = payload;
  yield put(auth(user));
}
