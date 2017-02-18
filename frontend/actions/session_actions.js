import * as APIUtil from '../util/session_api_util';
import {browserHistory} from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user)
      .then(newUser => dispatch(receieveCurrentUser(newUser)),
        err => dispatch(receieveErrors(err.responseJSON)));
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout()
      .then(() => dispatch(receieveCurrentUser(null)),
        err => dispatch(receieveErrors(err.responseJSON)))
          .then(() => browserHistory.push('/'));
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user)
      .then(newUser => dispatch(receieveCurrentUser(newUser)),
        err => dispatch(receieveErrors(err.responseJSON)));
  };
};

export const clearErrors = () => {
  return (dispatch) => {
    dispatch(receieveErrors([]));
  };
};

export const receieveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receieveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

