import { User } from '../../../types/User';

/**
 * Types
 */

export interface AuthState {
  data: User;
}

export enum AuthTypes {
  AUTH = 'auth/AUTH',
  REMOVE_AUTH = 'auth/REMOVE_AUTH',
}
