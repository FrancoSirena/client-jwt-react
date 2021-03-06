import axios from 'axios';
import { AUTH_USER, AUTH_ERR } from './types';

export const login = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:3090/signin', formProps);
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response);
    callback();
  } catch(err) {
    dispatch({ type: AUTH_ERR, payload: 'Wrong username and password' })   
  }
}