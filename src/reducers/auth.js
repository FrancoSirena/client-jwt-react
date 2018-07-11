import { AUTH_USER, AUTH_ERR, AUTH_CLEAR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: ''
}
export default (state = INITIAL_STATE,  action) => {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload, errorMessage: '' };
    case AUTH_ERR:
      return {...state, errorMessage: action.payload, authenticated: '' };
    case AUTH_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
}