import { AUTH_USER } from './types';

export const logout = (callback) => {
  localStorage.removeItem('token');
  callback();
  return {
    type: AUTH_USER,
    payload: ''
  }
}