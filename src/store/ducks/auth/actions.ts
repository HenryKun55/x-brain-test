import { action } from 'typesafe-actions';
import { AuthTypes } from './types';
import { User } from '../../../types/User';

const auth = (user: User) => action(AuthTypes.AUTH, user);

export default auth;
