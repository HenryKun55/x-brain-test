import { action } from 'typesafe-actions';
import { AuthTypes } from './types';
import { User } from '../../../types/User';

export const auth = (user: User) => action(AuthTypes.AUTH, { user });

export const removeAuth = () => action(AuthTypes.REMOVE_AUTH);
